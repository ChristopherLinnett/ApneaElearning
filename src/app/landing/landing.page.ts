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
import SwiperCore, {EffectCoverflow} from "swiper";
SwiperCore.use([EffectCoverflow])
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
  userCourses = []
  courseDate = ""
  courseType = ""
  studentList = []

  @ViewChild('swiper') swiper: SwiperComponent
config: SwiperOptions = {slidesPerView: 'auto' , effect: 'coverflow'}
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
    if (this.userService.getUser().courses.length > 0){

    this.userCourses = this.userService.getUser().courses
    this.userCourses= this.userCourses.sort((a, b) => {
      return a.courseDate - b.courseDate}).reverse()
      this.courseDate = this.userService.getUser().courses[0].courseDate
      this.courseType = this.userService.getUser().courses[0].courseType
      this.studentList = this.userService.getUser().courses[0].students
    }

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
    modal.onDidDismiss().then(() => {
      this.dataStorageService.lookup('users').then((userlist => {
        for (let user of userlist){
          if (user.email == this.userService.getUsername()){
            this.userService.user = user
            this.synchroniseUser().then(_ => {
            this.userCourses = this.userService.getUser().courses
            this.userCourses = this.userCourses.sort((a, b) => {
              return a.courseDate - b.courseDate})
        
              console.log(this.userCourses[0])
              this.courseDate = this.userCourses[0].courseDate
              this.courseType = this.userCourses[0].courseType
              this.studentList = this.userCourses[0].students
            })
          }
        }
      }))
    });
    return modal.present();
  }

  ngOnDestroy(){
    console.log('destroy instan')
  }
}
