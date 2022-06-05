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

  /**
   * It takes the user's current information, and updates it with the new information that the user has
   * entered. 
   * 
   * The problem is that the user can enter a new email address, and the function will update the
   * user's information with the new email address. 
   * 
   * However, the user can also enter a new password, and the function will update the user's
   * information with the new password. 
   * 
   * The problem is that the user can enter a new email address, and the function will update the
   * user's information with the new email address. 
   * 
   * However, the user can also enter a new password, and the function will update the user's
   * information with the new password. 
   * 
   * The problem is that the user can enter a new email address, and the function will update the
   * user's information with the new email address. 
   * 
   * However, the user can also enter a new password
   */
  async saveProfile(){
    var currentUser = this.olduser
    if (this.email && this.email.length >5){
       currentUser.email = this.email.toLowerCase()
    }
    if (this.firstname && this.firstname.length >= 3) {
      currentUser.firstname = this.firstname.toLowerCase()
    }
    if (this.lastname && this.lastname.length >= 2) {
      currentUser.lastname = this.lastname.toLowerCase()
    }
    if (this.phonenum && this.phonenum.length > 6){
      currentUser.phonenum = this.phonenum
    }

    if (this.newpassword && this.newpassword.length> 5){
        currentUser.password = this.newpassword.toLowerCase()
    }
    if (this.oldpassword == this.olduser.password){
    var userlist = await this.dataStorage.lookup('users')
    userlist[`${this.olduser.email}`] = currentUser
    await this.dataStorage.save('users', userlist)
    this.saveAlert(true)
    this.userService.user = currentUser
    this.clearfields()
    }
  }
  /**
   * It clears the fields of the form.
   */
  clearfields(){
    this.firstname = ""
    this.lastname = ""
    this.oldpassword = ""
    this.newpassword = ""
    this.phonenum = ""
  }

  /**
   * The ngOnInit() function is a lifecycle hook that is called after Angular has initialized all
   * data-bound properties of a directive.
   */
  ngOnInit() {
    this.photoService.loadFiles()
  }
  /**
   * This function creates an alert, and then presents it.
   * @param {boolean} successful - boolean - This is a boolean value that will be passed to the
   * function. If the value is true, the alert will be shown. If the value is false, the alert will not
   * be shown.
   */
  async saveAlert(successful: boolean){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Profile Updated',
      message: 'Successfully Updated your profile',
      buttons: ['OK']
    });

    await alert.present();
}

/**
 * It takes an image object as a parameter and passes it to the deleteImage function in the photo
 * service
 * @param image - the image object that is being deleted
 */
deleteImage(image){
  this.photoService.deleteImage(image);
}
}
