import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-landing',
  templateUrl: './course-landing.page.html',
  styleUrls: ['./course-landing.page.scss'],
})
export class CourseLandingPage implements OnInit {
  thisCourse: String;
  thisCourseChanged: Subscription;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.thisCourse = this.courseService.thisCourse
    this.thisCourseChanged = this.courseService.courseChange
        .subscribe(course => {
          this.thisCourse = course;
        })
  }

}
