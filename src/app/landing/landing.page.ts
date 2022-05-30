import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { EffectCoverflow } from 'swiper';
SwiperCore.use([EffectCoverflow]);
import { Router } from '@angular/router';
import { ModalController} from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CourseService } from '../course-landing/course.service';
import { CreatecourseComponent } from '../instructor/createcourse/createcourse.component';
import { UserService } from '../users/user.service';
import { OnDestroy } from '@angular/core';
import { DatastorageService } from '../datastorage.service';
import { DashboardComponent } from './dashboard/dashboard.component';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
/* It's a class that displays a list of courses that a user can select. */
export class LandingPage implements OnInit, OnDestroy {
  private loggedInSubscribed: Subscription;
  availableCourses: { index: number, title: string; description: string }[] = [];
  username: string;
  loggedIn: boolean;
  userRole: string;
  firstname: string;
  studentView: Boolean = false;
  user;
  userCourses = [];
  courseDate = '';
  courseType = '';
  studentList = [];

  @ViewChild('swiper') swiper: SwiperComponent;
  config: SwiperOptions = { slidesPerView: 'auto', effect: 'coverflow' };
  /**
   * The above function is a constructor function that takes in the following parameters:
   * dataStorageService, modalController, userService, courseService, and router.
   * @param {DatastorageService} dataStorageService - DatastorageService,
   * @param {ModalController} modalController - ModalController,
   * @param {UserService} userService - UserService
   * @param {CourseService} courseService - CourseService,
   * @param {Router} router - Router
   */
  constructor(
    private dataStorageService: DatastorageService,
    private modalController: ModalController,
    private userService: UserService,
    private courseService: CourseService,
    private router: Router
  ) {
    this.username = this.userService.getfirstname();
    this.loggedIn = this.userService.loggedIn;
  }
  /**
   * When the page loads, synchronise the user, then update the swiper.
   */
  async ngOnInit() {
    await this.synchroniseUser();
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  /**
   * The showUserOptions() function is called when the user clicks on the user icon in the header. It
   * calls the showUserOptions() function in the userService, which is a service that handles all user
   * related functions.
   */
  async showUserOptions() {
    this.userService.showUserOptions()
  }

  /**
   * When a course button is pressed, the course's state is updated to show that as the current course
   * @param course - the course that was selected
   */
  onSelectCourse(course) {
    this.courseService.setCourse(course);
  }


  /**
   * It takes the courses from the userService and compares them to the courses from the courseService.
   * If they match, it pushes the course from the courseService into the availableCourses array.
   * @returns the value of the last expression in the function.
   */
  async synchroniseUser() {
    var availableCourseNames = await this.userService.getCourses();
    for (let course of this.courseService.getAllCourses()) {
      for (let testCourse of availableCourseNames) {
        if (testCourse.courseType == course.title) {
          this.availableCourses.push(course);
        }
      }
    }
    this.username = this.userService.getfirstname();
    this.userRole = this.userService.getUserRole();
    if (this.userService.getUser().courses.length == 0) {
      return;
    } else {
      this.userCourses = this.userService.getUser().courses;
      if (this.userCourses.length > 1)
      {this.userCourses = this.userCourses
        .sort((a, b) => {
          return a.courseDate - b.courseDate;
        })
        .reverse();}
      this.courseDate = this.userCourses[0].courseDate;
      this.courseType = this.userCourses[0].courseType;
      this.studentList = this.userCourses[0].students;
    }
  }

  /**
   * The function is called when the user clicks the logout button. The function sets the studentView
   * variable to false and calls the logout function in the userService.
   */
  logout() {
    this.studentView = false;
    this.userService.logout();
  }

  /**
   * It launches a modal, and when the modal is dismissed, it updates the user's courses and then
   * updates the courseDate, courseType, and studentList variables.
   * @returns The modal.present() is returning a promise.
   */
  async onCreateCourse() {
    const modal = await this.modalController.create({
      component: CreatecourseComponent,
      componentProps: {},
    });
    modal.onDidDismiss().then(() => {
      this.dataStorageService.lookup('users').then((userlist) => {
        for (let user of userlist) {
          if (user.email == this.userService.getUsername()) {
            this.userService.user = user;
            this.synchroniseUser().then((_) => {
              this.userCourses = this.userService.getUser().courses;
              this.userCourses = this.userCourses.sort((a, b) => {
                return a.courseDate - b.courseDate;
              }).reverse();

              if (this.userCourses.length > 0) {
                this.courseDate = this.userCourses[0].courseDate;
                this.courseType = this.userCourses[0].courseType;
                this.studentList = this.userCourses[0].students;
              }
            });
          }
        }
      });
    });
    return modal.present();
  }

  async launchDashboard(course) {
    const dashboardModal = await this.modalController.create({
      component: DashboardComponent,
      cssClass: 'dashboardmodal',
      componentProps: {studentList: course.students, courseDate: course.courseDate,courseType: course.courseType },
    });
    dashboardModal.onDidDismiss().then(() => {
      
      
    });
    return dashboardModal.present();
  }

  ngOnDestroy() { }
}
