import { Component, Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from '../course-landing/course.service';
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

  constructor(private userService: UserService, private courseService: CourseService, private router: Router) {
    this.availableCourses = this.userService.getCourses()
    this.username = this.userService.getUsername()
   }
   ngOnInit() {
   this.loggedIn = this.userService.loggedIn;
   this.loggedInSubscribed = this.userService.loggedInChanged
        .subscribe(logged => {
          this.loggedIn = logged;
          this.synchroniseUser()
        })
  }
  onSelectCourse(course) {
    this.courseService.setCourse(course)
  }

  synchroniseUser(){
    this.availableCourses = this.userService.getCourses()
    this.username = this.userService.getUsername()
   }
   logout(){
  
   }

}

