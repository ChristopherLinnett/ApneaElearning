import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService implements OnInit {
  allCourses = ["AIDA1","AIDA2","AIDA3","AIDA4","AIDA Instructor"]
  thisCourse: String;
  courseChange: Subject<String>;
  constructor() {}

  ngOnInit(){
    this.courseChange.next(this.getCourse())
  }

  getCourse() {
    return this.thisCourse
  }
  setCourse(course) {
    this.thisCourse = course
  }
}
