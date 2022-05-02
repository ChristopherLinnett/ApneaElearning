import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('username') usernameRef: ElementRef<HTMLInputElement>;
  @ViewChild('password') passwordRef: ElementRef<HTMLInputElement>;
  username: String
  password: String
  constructor(private userService: UserService, private modalController: ModalController) {}

  login(){
    this.userService.login(this.usernameRef.nativeElement.value,this.passwordRef.nativeElement.value)
    if (this.userService.loggedIn) {
      this.modalController.dismiss()
    }
    console.log(this.usernameRef.nativeElement.value)
  }

  ngOnInit() {
  }

}
