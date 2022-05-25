import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonModal, ModalController } from '@ionic/angular';
import { DatastorageService } from 'src/app/datastorage.service';
import { UserService } from 'src/app/users/user.service';
import { StudentConstructor } from './studentconstructor.class';
import { CourseConstructor } from './studentconstructor.class';

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
  constructor(private modalController:ModalController, private alertController: AlertController, private userService: UserService, private dataStorageService: DatastorageService) {
    this.courseStudents = [];

  }

  addEmptyStudent() {
    //adds a new student to be edited in this page's form
    var studentEntry = new StudentConstructor("", "", "");
    this.courseStudents.push(studentEntry);
  }

  addStudentToCourse(firstname:string, lastname: string, email:string, modal:IonModal) {
    let studentEntry = new StudentConstructor(firstname.toLowerCase(), lastname.toLowerCase(), email.toLowerCase())
    this.courseStudents.push(studentEntry)
    this.firstname = ""
    this.lastname = ""
    this.email = ""
    this.closeModal(modal)
  }
  saveCourse() {
    var studentsToSave = []
    var studentIdsToSave = []
    for (let student of this.courseStudents) {
      student.availableCourses.push(new CourseConstructor(this.courseDate,this.selectedCourse, this.userService.getUsername()))
      studentIdsToSave.push(`${student.firstName} ${student.lastName}`)
      studentsToSave.push(student)
    }
    console.log(studentIdsToSave)
    this.userService.addUsers(studentsToSave)
    this.userService.addCourse(new CourseConstructor(this.courseDate, this.selectedCourse, "self", studentIdsToSave))
  }
  closeModal(modal:IonModal){
    modal.dismiss()
  }
  openModal(modal: IonModal){
    modal.present()
  }

  async loadAllCourses(){
    this.dataStorageService.lookup('')
  }

  async quitAddCourse(){
  if (this.courseDate || this.selectedCourse || this.courseStudents.length > 0) {const alert = await this.alertController.create({
    cssClass: 'alert-controller',
    header: 'Cancel Course Creation',
    message: 'Are you sure you want to cancel creating this course?',
    buttons: [{text: 'No', role: 'cancel', cssClass: 'secondary', id: 'cancel-button}'},{text: 'Yes', id: 'confirm-button', handler: () => {this.modalController.dismiss()}}]
  });
  await alert.present();
} else {this.modalController.dismiss()}
  }
  ngOnInit() {}
}
