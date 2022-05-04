import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../users/user.service';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-landing',
  templateUrl: './course-landing.page.html',
  styleUrls: ['./course-landing.page.scss'],
})
export class CourseLandingPage implements OnInit {
  thisCourse: {title: String, description: String};
  constructor(private courseService: CourseService, private userService: UserService) { }

ngOnInit() {
  this.thisCourse = this.courseService.getCourse()
}



}
