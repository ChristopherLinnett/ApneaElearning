import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  incorrectPassword: string;
  incorrectCount: number = 0
  username: String;
  password: String;
  constructor(private userService: UserService, private modalController: ModalController, private router: Router) {}

  login(){
    this.userService.login(this.usernameRef.nativeElement.value,this.passwordRef.nativeElement.value)
    if (!this.userService.loggedIn){
      this.incorrectCount++
      this.incorrectPassword = `Incorrect details, please try again
      (${this.incorrectCount} attempts)`;
      return
    }
      this.router.navigate(['landing'])
      this.modalController.dismiss()
  }

  ngOnInit() {
  }

}
