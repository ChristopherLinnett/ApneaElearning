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
    this.username = this.userService.getfirstname();
    this.loggedIn = this.userService.loggedIn;
  }

  async ngOnInit() {
    await this.synchroniseUser()
    if (this.swiper) {
      this.swiper.updateSwiper({})
    }
  }


  async showUserOptions() {
    this.userService.showUserOptions()
  }

 
  onSelectCourse(course,index) {
    this.courseService.setCourse(course);
    this.courseService.currentCourseSelectionIndex = index;
  }



  async synchroniseUser() {
    this.availableCourses = Object.values(this.userService.userlist[`${this.userService.user.email}`].availableCourses)
    console.log(this.availableCourses)
    

    this.username = this.userService.getfirstname();
    this.userRole = this.userService.getUserRole();
    if (Object.keys(this.userService.user.courses).length == 0) {
      this.courseDate = ""
      this.courseType = ""
      this.studentList = []
      return;
    } else {
      this.userCourses = Object.values(this.userService.user['courses'])
      if (Object.keys(this.userService.user.courses).length > 1){
        this.userCourses = this.userCourses
        .sort((a, b) => {
          return a.courseDate - b.courseDate;
        }).reverse();}
      this.courseDate = this.userCourses[0]['courseDate'];
      this.courseType = this.userCourses[0]['courseType'];
      this.studentList = this.userCourses[0]['students'];
    }
  }


  logout() {
    this.studentView = false;
    this.userService.logout();
  }

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
              this.userCourses = Object.values(this.userService.user['courses'])
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
      showBackdrop: false,
      backdropDismiss: true,
      canDismiss: true,
      componentProps: {studentList: course.students, courseDate: course.courseDate,courseType: course.courseType, courseID: course.courseID },
    });
    dashboardModal.onDidDismiss().then(() => {
      this.synchroniseUser()
      console.log('dismissed')

    });
    return dashboardModal.present();
  }

  ngOnDestroy() { }
}
