import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
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
    private homeComp: AppComponent,
    private courseService: CourseService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.thisCourse = this.courseService.getCourse();
  }
  onClickModule() {
    //move to course overview page
    this.router.navigate(['overview']);
  }
  launchQuiz() {
    this.router.navigate(['/in-progress']); //move to quiz in progress page
  }
  logout() {
    //logs out  user
    this.userService.logout();
    this.homeComp.checkLogin();
  }
}
