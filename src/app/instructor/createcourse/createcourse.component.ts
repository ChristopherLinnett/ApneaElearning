import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonModal, ModalController } from '@ionic/angular';
import { loadingController } from '@ionic/core';
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
  courseDate = "";
  selectedCourse = "none";
  courseIndex;
  firstname = "";
  lastname = "";
  email = "";
  constructor(private modalController:ModalController, private alertController: AlertController, private userService: UserService, private dataStorageService: DatastorageService) {
    this.courseStudents = [];

  }

  addEmptyStudent() {
    //adds a new student to be edited in this page's form
    var studentEntry = new StudentConstructor(0,"", "", "");
    this.courseStudents.push(studentEntry);
  }

  async addStudentToCourse(firstname:string, lastname: string, email:string, modal:IonModal) {
    let totalStudents = await this.dataStorageService.lookup('users')
    let studentEntry = new StudentConstructor(totalStudents.length,firstname.toLowerCase(), lastname.toLowerCase(), email.toLowerCase())
    this.courseStudents.push(studentEntry)
    this.firstname = ""
    this.lastname = ""
    this.email = ""
    this.closeModal(modal)
  }
  async saveCourse() {
    var studentsToSave = []
    var studentIdsToSave = []
    var existingStudents = await this.dataStorageService.lookup('users')
    for (let student of this.courseStudents) {
        for (let user of existingStudents) {
          if (student.email == user.email){
            student = user
            for (let course of student.availableCourses){
              if (course.courseIndex == this.courseIndex){

              }
            }
            var courseID = `${new Date()}${this.userService.getUser().email}`

            student.availableCourses.push(new CourseConstructor(courseID, this.courseIndex,this.courseDate,this.selectedCourse, this.userService.getUsername()))
          }
        }
      student.availableCourses.push(new CourseConstructor(courseID, this.courseIndex,this.courseDate,this.selectedCourse, this.userService.getUsername()))
      studentIdsToSave.push(`${student.email}`)
      studentsToSave.push(student)
      console.log(student.availableCourses)
    }
    await this.userService.addUsers(studentsToSave)
    await this.userService.addCourse(new CourseConstructor(courseID, this.courseIndex,this.courseDate, this.selectedCourse, "self", studentIdsToSave))
    this.modalController.dismiss()
  }
  closeModal(modal:IonModal, index?: number){
    if (index) {
      this.courseIndex = index
    }
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
