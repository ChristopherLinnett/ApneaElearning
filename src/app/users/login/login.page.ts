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
  ) {
  }
  clearMem(){
    this.dataStorage.clear()
    this.ngOnInit()
  }

  async login() {
    //authenticates user login, returns message if fails, navigates router to landing page if successful
    await this.userService.login(this.username, this.password)
      if (!this.userService.loggedIn) {
      this.incorrectCount++;
      this.incorrectPassword = `Incorrect details, please try again
      (${this.incorrectCount} attempts)`;
      return;
    }
    this.incorrectCount = 0;
    this.incorrectPassword = '';
    if (this.savelogin) {
    await this.dataStorage.save('saveduserdetails', {
        username: this.username,
        password: this.password,
      });
    } else {await this.dataStorage.save('saveduserdetails', {username: "", password: ""})}
    this.username = '';
    this.password = '';
    this.savelogin = false
    this.router.navigate(['/landing'], { replaceUrl: true });

  }


 async ngOnInit() {
    var details = await this.dataStorage.lookup('saveduserdetails')
      if (details && details != {username: "", password: ""}) {
        this.username = details.username;
        this.password = details.password;
          if (this.username.length > 0 && this.password.length > 0){
            this.savelogin = true
          }
      };
  }

}
