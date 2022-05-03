import { Component, Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../users/user.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit{
  private loggedInSubscribed: Subscription;
  availableCourses: String[];
  username: String;
  loggedIn: Boolean;

  constructor(private userService: UserService) {
    this.availableCourses = this.userService.getCourses()
    this.username = this.userService.getUsername()
   }
   ngOnInit() {
   this.loggedIn = this.userService.loggedIn;
   this.loggedInSubscribed = this.userService.loggedInChanged
        .subscribe(logged => {
          this.loggedIn = logged;
          this.tester()
        })
  }

  tester(){
    this.availableCourses = this.userService.getCourses()
    this.username = this.userService.getUsername()
   }

}
function next(next: any, arg1: (logged: Boolean) => void, error: any, arg3: null, complete: any, arg5: null): Subscription {
  throw new Error('Function not implemented.');
}

function complete(next: (next: any, arg1: (logged: Boolean) => void, error: any, arg3: null, complete: any, arg5: null) => Subscription, arg1: (logged: Boolean) => void, Error: ErrorConstructor, arg3: null, complete: any, arg5: null): Subscription {
  throw new Error('Function not implemented.');
}

