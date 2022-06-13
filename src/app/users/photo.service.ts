import { UserService } from 'src/app/users/user.service';
import { Injectable, OnInit } from '@angular/core';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { LoadingController, Platform } from '@ionic/angular';

const IMAGE_DIR = 'stored-images';

interface LocalFile {
  name: string;
  path: string;
  data: string;
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  images: LocalFile[] = [];
  constructor(
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private userService: UserService
  ) {}
  /**
   * It deletes a file from the filesystem and then reloads the list of files
   * @param {LocalFile} file - LocalFile - The file to delete
   */
  async deleteImage(file: LocalFile) {
    await Filesystem.deleteFile({
      directory: Directory.Data,
      path: file.path,
    });
    this.loadFiles();
  }

  /**
   * It creates a loading spinner, then checks if the directory exists, if it doesn't it creates it,
   * then it reads the directory and loads the file data.
   */
  async loadFiles() {
    this.images = [];
    const loading = await this.loadingCtrl.create({
      message: 'Loading data...',
    });
    await loading.present();

    Filesystem.readdir({
      directory: Directory.Data,
      path: IMAGE_DIR,
    })
      .then(
        (result) => {
          this.loadFileData(result.files);
        },
        async (err) => {
          console.log('err: ', err);
          await Filesystem.mkdir({
            directory: Directory.Data,
            path: IMAGE_DIR,
          });
        }
      )
      .then((_) => {
        loading.dismiss();
      });
  }

  /**
   * It reads the file names in the directory, and then reads the file data for each file name.
   * @param {string[]} fileNames - string[] = the array of file names that are in the directory
   */
  async loadFileData(fileNames: string[]) {
    for (let f of fileNames) {
      if ((f = `${this.userService.user.email}.jpeg`)) {
        const filePath = `${IMAGE_DIR}/${f}`;

        const readFile = await Filesystem.readFile({
          directory: Directory.Data,
          path: filePath,
        });
        this.images.push({
          name: f,
          path: filePath,
          data: `data:image/jpeg;base64,${readFile.data}`,
        });
      }
    }
  }

  /**
   * It opens the camera, takes a picture, and saves it to the device.
   */
  async selectImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
    });
    console.log(image);
    if (image) {
      this.saveImage(image);
    }
  }

  async replaceImage(image) {
    await this.deleteImage(image);
    await this.selectImage();
  }

  /**
   * It takes a photo object, converts it to base64, then saves it to the filesystem.
   * @param {Photo} photo - Photo - this is the photo that was taken by the camera
   */
  async saveImage(photo: Photo) {
    const base64Data = await this.readAsBase64(photo);
    const fileName = `${this.userService.user.email}` + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      directory: Directory.Data,
      path: `${IMAGE_DIR}/${fileName}`,
      data: base64Data,
    });
    this.loadFiles();
  }

  /**
   * If the app is running on a device, read the file from the filesystem, otherwise fetch the photo
   * from the web storage and convert it to base64 format
   * @param {Photo} photo - Photo - this is the photo object that we are passing in.
   * @returns The base64 string of the photo.
   */
  async readAsBase64(photo: Photo) {
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path,
      });

      return file.data;
    } else {
      // fetch the photo, read as blob, then convert to base64 format
      const response = await fetch(photo.webPath);
      const blob = await response.blob();

      return (await this.convertBlobToBase64(blob)) as string;
    }
  }

  /* Converting the blob to base64. */
  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
}
