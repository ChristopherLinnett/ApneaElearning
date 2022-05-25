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
import { CourseConstructor } from '../instructor/createcourse/studentconstructor.class';
import { OnDestroy } from '@angular/core';
import { HostListener } from '@angular/core';
import { DatastorageService } from '../datastorage.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit, AfterContentChecked, OnDestroy {
  private loggedInSubscribed: Subscription;
  availableCourses: {title: string, description: string}[] = []
  username: string;
  loggedIn: boolean;
  userRole: string;
  firstname: string;
  studentView: Boolean;
  user;
  courseDate = ""
  courseType = ""
  studentList = []

  @ViewChild('swiper') swiper: SwiperComponent
config: SwiperOptions = {slidesPerView: 'auto' , effect: 'cube'}
  constructor(
    private dataStorageService: DatastorageService,
    private modalController: ModalController,
    private userService: UserService,
    private courseService: CourseService,
    private router: Router,
  ) {
    this.username = this.userService.getUsername();
    this.loggedIn = this.userService.loggedIn;

  }
  async ngOnInit() {
    await this.synchroniseUser()
    if (this.swiper) {
      this.swiper.updateSwiper({})
    }
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

  }

  async synchroniseUser() {
    //sets component variables to match the application's state
    var availableCourseNames = await this.userService.getCourses();
    for (let course of this.courseService.getAllCourses()){
      console.log(availableCourseNames, course.title)
      for (let testCourse of availableCourseNames){
        if (testCourse.courseType == course.title){
          this.availableCourses.push(course)
        }
      }
      
    }
    this.username = this.userService.getUsername();
    this.userRole = this.userService.getUserRole();
    var userlist;
    userlist = await this.dataStorageService.lookup('users')
    console.log(userlist)
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

  ngOnDestroy(){
    console.log('destroy instan')
  }
}
