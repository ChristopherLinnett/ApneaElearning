import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from './users/login/login.page';
import { UserService } from './users/user.service';
import { SplashScreen } from '@capacitor/splash-screen';

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

  async ngOnInit(): Promise<void> {
    await SplashScreen.show({
      autoHide: true
    });
}

}
