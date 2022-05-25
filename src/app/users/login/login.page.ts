import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatastorageService } from 'src/app/datastorage.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  incorrectPassword: string;
  incorrectCount: number = 0;
  username: string = '';
  password: string = '';
  savelogin: boolean;
  constructor(
    private userService: UserService,
    private router: Router,
    private dataStorage: DatastorageService
  ) {}

  login() {
    //authenticates user login, returns message if fails, navigates router to landing page if successful
    this.userService.login(this.username, this.password);
    if (!this.userService.loggedIn) {
      this.incorrectCount++;
      this.incorrectPassword = `Incorrect details, please try again
      (${this.incorrectCount} attempts)`;
      return;
    }
    this.incorrectCount = 0;
    this.incorrectPassword = '';
    if (this.savelogin) {
      this.dataStorage.save('saveduserdetails', {
        username: this.username,
        password: this.password,
      });
    } else {this.dataStorage.save('saveduserdetails', {username: "", password: ""})}
    this.router.navigateByUrl('/landing', { replaceUrl: true });
    this.username = '';
    this.password = '';
    this.savelogin = false
  }

  ngOnInit() {
    this.dataStorage.lookup('saveduserdetails').then((details) => {
      if (details && details != {username: "", password: ""}) {
        this.username = details.username;
        this.password = details.password;
          if (this.username.length > 0 && this.password.length > 0){
            this.savelogin = true
          }
      }
    });
  }
}
