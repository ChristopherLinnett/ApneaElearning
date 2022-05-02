import { Component, Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  availableCourses: String[]
  username: String
  constructor(private userService: UserService) {
    this.availableCourses = this.userService.getCourses()
    this.username = this.userService.getUsername()
   }

   tester(){
    this.availableCourses = this.userService.getCourses()
    this.username = this.userService.getUsername()
   }
   ionViewWillEnter(){
    this.tester()
   }

 


}
