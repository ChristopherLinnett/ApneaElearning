import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  incorrectPassword: string;
  incorrectCount: number = 0;
  username: string = ""
  password: string = ""
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  login() {
    //authenticates user login, returns message if fails, navigates router to landing page if successful
    this.userService.login(this.username,this.password);
    this.username = ""
    this.password = ""
    if (!this.userService.loggedIn) {
      this.incorrectCount++;
      this.incorrectPassword = `Incorrect details, please try again
      (${this.incorrectCount} attempts)`;
      return;
    }
    this.incorrectCount = 0;
    this.incorrectPassword = '';
    this.router.navigateByUrl('/landing', { replaceUrl: true }) 

  }

  ngOnInit() {}
}
