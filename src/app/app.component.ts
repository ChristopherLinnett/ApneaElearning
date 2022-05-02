import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from './users/login/login.page';
import { UserService } from './users/user.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private modalController: ModalController, private userService: UserService) {} 

ngOnInit(): void {
  this.checkLogin()
}
  async popupLogin() {
    const modal = await this.modalController.create({
      component:LoginPage,
      componentProps: { },backdropDismiss: false
    });
    modal.onDidDismiss().then(() => {
      
    })
    return modal.present()
  }
  logout() {
    this.userService.logout()
    this.checkLogin()
  }

  checkLogin() {
    if (!this.userService.loggedIn) {
      this.popupLogin()
    }
  }
}
