import { Component, Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AppComponent } from '../app.component';
import { CourseService } from '../course-landing/course.service';
import { CreatecourseComponent } from '../instructor/createcourse/createcourse.component';
import { UserService } from '../users/user.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit{
  private loggedInSubscribed: Subscription;
  availableCourses: string[];
  username: string;
  loggedIn: Boolean;
  userRole: string;
  instructorView: Boolean;

  constructor(private modalController:ModalController, private userService: UserService,private homeComp: AppComponent, private courseService: CourseService, private router: Router) {
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
  onSelectCourse(course) {              //when pressing course button, updates course's state to show that as the current course
    this.courseService.setCourse(course)
  }

  synchroniseUser(){                    //sets component variables to match the application's state
    this.availableCourses = this.userService.getCourses()
    this.username = this.userService.getUsername()
    this.userRole = this.userService.getUserRole()
   }
   logout(){                //logout button
    this.userService.logout()
    this.homeComp.checkLogin()
  }

  async onCreateCourse() {            //launches modal for instructor to add new courses
    const modal = await this.modalController.create({
      component:CreatecourseComponent,
      componentProps: { },
    });
    modal.onDidDismiss().then(() => {
    })
    return modal.present()
  }

}

