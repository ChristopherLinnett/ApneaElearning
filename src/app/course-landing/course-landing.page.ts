import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-landing',
  templateUrl: './course-landing.page.html',
  styleUrls: ['./course-landing.page.scss'],
})
export class CourseLandingPage implements OnInit {
  thisCourse: {title: String, description: String};
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.thisCourse = this.courseService.getCourse()
}

logCourse() {
  console.log(this.thisCourse)
}
}
