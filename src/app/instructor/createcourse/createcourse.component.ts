import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { StudentConstructor } from './studentconstructor.class';


@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.scss'],
})
export class CreatecourseComponent implements OnInit {
  @ViewChild('addStudentModal') addStudentModal:IonModal;
  @ViewChild('courseDateModal') courseDateModal:IonModal;
  @ViewChild('courseTypeModal') courseTypeModal:IonModal;
  courseOptions = ['AIDA1', 'AIDA2', 'AIDA3', 'AIDA4']
  courseStudents: StudentConstructor[];
  courseDate;
  selectedCourse;
  firstname;
  lastname;
  email;
  constructor() {
    this.courseStudents = [];

  }
  addEmptyStudent() {
    //adds a new student to be edited in this page's form
    var studentEntry = new StudentConstructor("", "", "");
    this.courseStudents.push(studentEntry);
  }
  addStudentToCourse(firstname:string, lastname: string, email:string, modal:IonModal) {
    let studentEntry = new StudentConstructor(firstname, lastname, email)
    this.courseStudents.push(studentEntry)
    this.firstname = ""
    this.lastname = ""
    this.email = ""
    this.closeModal(modal)
  }
  saveCourse() {
  }
  closeModal(modal:IonModal){
    modal.dismiss()
  }
  openModal(modal: IonModal){
    modal.present()
  }

  changed(event){
    console.log(event)
  }
  ngOnInit() {}
}
