import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { EffectCoverflow } from 'swiper';
SwiperCore.use([EffectCoverflow]);
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
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
  availableCourses = [];
  username: string;
  loggedIn: boolean;
  userRole: string;
  firstname: string;
  studentView: Boolean = false;
  userCourses = [];
  courseDate = '';
  courseType = '';
  studentList = [];

  @ViewChild('swiper') swiper: SwiperComponent;
  config: SwiperOptions = { slidesPerView: 'auto', effect: 'coverflow' };

  constructor(
    private dataStorageService: DatastorageService,
    private modalController: ModalController,
    private userService: UserService,
    private courseService: CourseService,
    private router: Router
  ) {
    this.username = this.userService.user.firstName;
    this.loggedIn = this.userService.loggedIn;
    this.userRole = this.userService.user.userRole;
  }

  async ngOnInit() {
    await this.userService.updateUserlist();
    await this.synchroniseUser();
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
    this.username = this.userService.user.firstName;
    this.availableCourses = Object.values(
      this.userService.userlist[`${this.userService.user.email}`]
        .availableCourses
    );
  }

  async showUserOptions() {
    this.userService.showUserOptions();
  }

  onSelectCourse(course) {
    this.courseService.setCourse(course);
  }

  /**
   * It takes the user's available courses from the database and puts them into an array.
   * @returns the value of the last statement in the function.
   */
  async synchroniseUser() {
    await this.userService.updateUserlist();
    this.availableCourses = Object.values(
      this.userService.userlist[`${this.userService.user.email}`]
        .availableCourses
    );
    console.log(this.availableCourses);
    this.username = this.userService.getfirstname();
    this.userRole = this.userService.getUserRole();
    if (Object.keys(this.userService.user.courses).length == 0) {
      this.courseDate = '';
      this.courseType = '';
      this.studentList = [];
      return;
    } else {
      this.userCourses = Object.values(this.userService.user['courses']);
      if (Object.keys(this.userService.user.courses).length > 1) {
        this.userCourses = this.userCourses
          .sort((a, b) => a.courseDate - b.courseDate)
          .reverse();
      }
      this.courseDate = this.userCourses[0]['courseDate'];
      this.courseType = this.userCourses[0]['courseType'];
      this.studentList = this.userCourses[0]['students'];
    }
  }


/**
   * The function above is a function that is called when the user clicks on the next button. The
   * function moves the content forward one section.
   */
 onNextClick(value?:'string') {
  //moves content forward one section
    this.swiper.swiperRef.slideNext()

}
/**
 * The above function is used to navigate to the previous slide in the swiper.
 */
onBackClick(value?:'string') {
  this.swiper.swiperRef.slidePrev()
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
   * It creates a modal, and when the modal is dismissed, it updates the user's data and then updates
   * the userCourses array.
   * @returns The modal.present() is returning a promise.
   */
  async onCreateCourse() {
    const modal = await this.modalController.create({
      component: CreatecourseComponent,
      componentProps: {},
    });
    modal.onDidDismiss().then(() => {
      this.dataStorageService.lookup('users').then((userlist) => {
        for (let user of Object.values(userlist)) {
          if (user['email'] == this.userService.getUsername()) {
            this.userService.user = user;
            this.synchroniseUser().then((_) => {
              this.userCourses = Object.values(
                this.userService.user['courses']
              );
              this.userCourses = this.userCourses
                .sort((a, b) => {
                  return a.courseDate - b.courseDate;
                })
                .reverse();

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

  /**
   * It opens a modal, and when the modal is dismissed, it runs a function that updates the data in the
   * page that opened the modal.
   * @param course - this is the course object that is being passed to the modal
   * @returns The modal is being returned.
   */
  async launchDashboard(course) {
    if (this.courseDate == '') {
      return;
    }
    const dashboardModal = await this.modalController.create({
      component: DashboardComponent,
      cssClass: 'dashboardmodal',
      showBackdrop: false,
      backdropDismiss: true,
      canDismiss: true,
      componentProps: {
        studentList: course.students,
        courseDate: course.courseDate,
        courseType: course.courseType,
        courseID: course.courseID,
      },
    });
    dashboardModal.onDidDismiss().then(() => {
      this.synchroniseUser();
      console.log(this.userCourses);
      this.ngOnInit();
    });
    return dashboardModal.present();
  }

  ngOnDestroy() {}
}
