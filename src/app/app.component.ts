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
  constructor(
    private modalController: ModalController,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.checkLogin();
  }
  async popupLogin() {
    //launches modal for login page
    const modal = await this.modalController.create({
      component: LoginPage,
      componentProps: {},
      backdropDismiss: false,
    });
    modal.onDidDismiss().then(() => {});
    return modal.present();
  }
  logout() {
    //logout button
    this.userService.logout();
    this.checkLogin();
  }

  checkLogin() {
    //launches login modal if state shows no user logged in
    if (!this.userService.loggedIn) {
      this.popupLogin();
    }
  }
}
