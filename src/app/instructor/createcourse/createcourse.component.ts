import { Component, OnInit } from '@angular/core';
import { Student } from './student.class';

@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.scss'],
})
export class CreatecourseComponent implements OnInit {
  students: any[];
  courseDate;
  constructor() {
    this.students = [];
  }
  addStudent() {
    //adds a new student to be edited in this page's form
    var student = new Student();
    this.students.push(student);
  }
  ngOnInit() {}
}
