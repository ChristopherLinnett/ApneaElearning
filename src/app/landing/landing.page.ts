import { ViewChild } from '@angular/core';
import {
  Component,
  Injectable,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CourseService } from '../course-landing/course.service';
import { CreatecourseComponent } from '../instructor/createcourse/createcourse.component';
import { UserService } from '../users/user.service';
import { AfterContentChecked } from '@angular/core';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit, AfterContentChecked {
  private loggedInSubscribed: Subscription;
  availableCourses: {title: string, description: string}[] = []
  username: string;
  loggedIn: Boolean;
  userRole: string;
  studentView: Boolean;
  @ViewChild('swiper') swiper: SwiperComponent
config: SwiperOptions = {slidesPerView: 'auto' , effect: 'cube'}
  constructor(
    private modalController: ModalController,
    private userService: UserService,
    private courseService: CourseService,
    private router: Router
  ) {
    this.username = this.userService.getUsername();
  }
  ngOnInit() {
    this.loggedIn = this.userService.loggedIn;
    this.synchroniseUser()
    // this.loggedInSubscribed = this.userService.loggedInChanged.subscribe(
    //   (logged) => {
    //     this.loggedIn = logged;
    //     this.synchroniseUser();
    //   }
    // );
  }
  onSelectCourse(course) {
    //when pressing course button, updates course's state to show that as the current course
    this.courseService.setCourse(course);
  }

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({})
    }
  }

  synchroniseUser() {
    //sets component variables to match the application's state
    var availableCourseNames = this.userService.getCourses();
    for (let course of this.courseService.getAllCourses()){
      for (let testCourse of availableCourseNames){
        if (testCourse == course.title){
          this.availableCourses.push(course)
        }
      }
      
    }
    console.log(this.availableCourses.length)
    this.username = this.userService.getUsername();
    this.userRole = this.userService.getUserRole();
  }
  logout() {
    //logout button
    this.studentView = false;
    this.userService.logout();
  }

  async onCreateCourse() {
    //launches modal for instructor to add new courses
    const modal = await this.modalController.create({
      component: CreatecourseComponent,
      componentProps: {},
    });
    modal.onDidDismiss().then(() => {});
    return modal.present();
  }
}
