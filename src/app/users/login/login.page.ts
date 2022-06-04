import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatastorageService } from 'src/app/datastorage.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
/* It's a login page that saves the user's login details if they want to. */
export class LoginPage implements OnInit {
  incorrectPassword= false;
  incorrectCount: number = 0;
  username: string = '';
  password: string = '';
  savelogin: boolean = false;
  constructor(
    private userService: UserService,
    private router: Router,
    private dataStorage: DatastorageService
  ) {}
  /* Clearing the memory. */
  clearMem() {
    this.dataStorage.clear();
    this.ngOnInit();
  }

  /* Authenticating the user login, returning a message if it fails, and navigating the router to
  the landing page if it is successful. */
  async login() {
    this.incorrectPassword=false
    await this.userService.login(this.username, this.password);
    if (!this.userService.loggedIn) {
      setTimeout(()=>{
      this.incorrectCount++;
      this.incorrectPassword = true;
      },100)
      return;
    }
    this.incorrectCount = 0;
    this.incorrectPassword = false;
    if (this.savelogin) {
      await this.dataStorage.save('saveduserdetails', {
        username: this.username,
        password: this.password,
      });
    } else {
      await this.dataStorage.save('saveduserdetails', {
        username: '',
        password: '',
      });
    }
    this.username = '';
    this.password = '';
    this.savelogin = false;
      this.router.navigate(['/landing'], { replaceUrl: true });
  }

  /**
   * If the user has saved their login details, then load them into the login form.
   */
  async ngOnInit() {
    await this.dataStorage.init()
    var details = await this.dataStorage.lookup('saveduserdetails');
    if (details && details != { username: '', password: '' }) {
      this.username = details.username;
      this.password = details.password;
      if (this.username.length > 0 && this.password.length > 0) {
        this.savelogin = true;
      }
    }
  }
}
