import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DatastorageService } from 'src/app/datastorage.service';
import { CourseConstructor } from 'src/app/instructor/createcourse/studentconstructor.class';
import { PhotoService } from '../photo.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
email = "";
firstname = "";
lastname = "";
oldpassword = "";
phonenum = "";
newpassword = "";
olduser;
  constructor(private userService: UserService, private dataStorage: DatastorageService, private alertController: AlertController, public photoService: PhotoService) {
    this.olduser = this.userService.getUser()
  }

  async saveProfile(){
    var currentUser = this.olduser
    if (this.email && this.email.length >5){
       currentUser.email = this.email.toLowerCase()
    }
    if (this.firstname && this.firstname.length > 3) {
      currentUser.firstname = this.firstname.toLowerCase()
    }
    if (this.lastname && this.lastname.length > 3) {
      currentUser.lastname = this.lastname.toLowerCase()
    }
    if (this.phonenum && this.phonenum.length > 6){
      currentUser.phonenum = this.phonenum
    }
    if (this.oldpassword == currentUser.password && this.newpassword && this.newpassword.length> 5){
        currentUser.password = this.newpassword.toLowerCase()
    var userlist = await this.dataStorage.lookup('users')
    var thisuserIndex = userlist.map(user => user.email).indexOf(`${currentUser.email}`)
    userlist[thisuserIndex] = currentUser
    await this.dataStorage.save('users', userlist)
    this.saveAlert(true)
    this.userService.user = currentUser
    this.clearfields()
    }
  }
  clearfields(){
    this.firstname = ""
    this.lastname = ""
    this.oldpassword = ""
    this.newpassword = ""
    this.phonenum = ""
  }

  ngOnInit() {
    this.photoService.loadFiles()
  }
  async saveAlert(successful: boolean){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Profile Updated',
      message: 'Successfully Updated your profile',
      buttons: ['OK']
    });

    await alert.present();
}

deleteImage(image){
  this.photoService.deleteImage(image);
}
}
