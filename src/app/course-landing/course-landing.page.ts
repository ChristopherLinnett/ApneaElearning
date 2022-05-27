import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InProgressPage } from '../quiz/in-progress/in-progress.page';
import { UserService } from '../users/user.service';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-landing',
  templateUrl: './course-landing.page.html',
  styleUrls: ['./course-landing.page.scss'],
})
export class CourseLandingPage implements OnInit {
  thisCourse: { title: String; description: String };
  quizAvailable = true;
  constructor(
    public courseService: CourseService,
    private userService: UserService,
    private router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.thisCourse = this.courseService.getCourse();
  }
  onClickModule() {
    //move to course overview page
    this.router.navigate(['overview']);
  }
  launchQuiz() {
    this.router.navigate(['/app-landing']); //move to quiz in progress page
  }

  logout() {
    //logs out  user
    this.userService.logout();
  }
}
