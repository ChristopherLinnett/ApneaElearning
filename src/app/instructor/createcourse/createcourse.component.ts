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
  @ViewChild('addStudentModal') addStudentModal: IonModal;
  @ViewChild('courseDateModal') courseDateModal: IonModal;
  @ViewChild('courseTypeModal') courseTypeModal: IonModal;
  courseOptions = ['AIDA1', 'AIDA2', 'AIDA3', 'AIDA4', 'AIDA5'];
  courseStudents;
  courseDate = '';
  selectedCourse = 'none';
  courseIndex;
  email = '';
  invalidEntry = false;
  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private userService: UserService,
    private dataStorageService: DatastorageService
  ) {
    this.courseStudents = [];
  }

  /**
   * It adds a new student to the courseStudents array.
   */
  addEmptyStudent() {
    //adds a new student to be edited in this page's form
    var studentEntry = new StudentConstructor(0, '');
    this.courseStudents.push(studentEntry);
  }

  /**
   * It takes an email address and a modal as parameters, checks to see if the email address is valid,
   * and if it is, it adds the email address to an array of students.
   *
   * The function is called when the user clicks a button in the modal.
   * @param {string} email - string - the email address of the student to be added
   * @param {IonModal} modal - Ionic Modal
   */
  async addStudentToCourse(email: string, modal: IonModal) {
    this.invalidEntry = false;
    if (this.email.length > 5 && this.email.includes('@')) {
      let totalStudents = await this.dataStorageService.lookup('users');
      let studentEntry = new StudentConstructor(
        totalStudents.length,
        email.toLowerCase()
      );
      this.courseStudents.push(studentEntry);
      this.email = '';
      this.closeModal(modal);
    } else {
      setTimeout(() => {
        this.invalidEntry = true;
      }, 100);
    }
  }
  /**
   * It takes a list of students, checks if they are in the database, if they are not, it adds them to
   * the database, then it adds a course to the database and adds the course to the students' available
   * courses.
   * </code>
   */
  async saveCourse() {
    const courseID = `${String(new Date())}${this.userService.getUser().email}`;
    var studentsToSave = [];
    var studentIdsToSave = [];
    for (let student of this.courseStudents) {
      if (student['email'] in Object.keys(this.userService.userlist) == false) {
        student['availableCourses'][`${courseID}`] = new CourseConstructor(
          courseID,
          this.courseIndex,
          this.courseDate,
          this.selectedCourse,
          this.userService.getUsername()
        );
        studentsToSave.push(student);
      } else {
        this.userService.userlist[`${student.email}`].availableCourses[
          `${courseID}`
        ] = new CourseConstructor(
          courseID,
          this.courseIndex,
          this.courseDate,
          this.selectedCourse,
          this.userService.getUsername()
        );
      }
      studentIdsToSave.push(`${student.email}`);
    }
    await this.userService.addUsers(studentsToSave);
    await this.userService.addCourse(
      new CourseConstructor(
        courseID,
        this.courseIndex,
        this.courseDate,
        this.selectedCourse,
        'self',
        studentIdsToSave
      )
    );
    this.modalController.dismiss();
  }
  /**
   * The function takes in a modal and an index, and if the index is defined, it sets the courseIndex
   * to the index, and then dismisses the modal.
   * @param {IonModal} modal - IonModal - this is the modal that you want to close
   * @param {number} [index] - number - the index of the course in the courses array
   */
  closeModal(modal: IonModal, index?: number) {
    if (index) {
      this.courseIndex = index;
    }
    modal.dismiss();
  }
  /**
   * It opens the modal.
   * @param {IonModal} modal - IonModal - The modal to open
   */
  openModal(modal: IonModal) {
    modal.present();
  }

  /**
   * The function is an async function that calls a service that returns an observable. The function
   * then subscribes to the observable and assigns the result to a variable.
   */
  async loadAllCourses() {
    this.dataStorageService.lookup('');
  }

  /**
   * If the user has entered any data into the form, the user is prompted to confirm that they want to
   * cancel the course creation. If the user has not entered any data into the form, the modal is
   * dismissed without prompting the user.
   */
  async quitAddCourse() {
    if (
      this.courseDate ||
      this.selectedCourse ||
      this.courseStudents.length > 0
    ) {
      const alert = await this.alertController.create({
        cssClass: 'alert-controller',
        header: 'Cancel Course Creation',
        message: 'Are you sure you want to cancel creating this course?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            id: 'cancel-button}',
          },
          {
            text: 'Yes',
            id: 'confirm-button',
            handler: () => {
              this.modalController.dismiss();
            },
          },
        ],
      });
      await alert.present();
    } else {
      this.modalController.dismiss();
    }
  }
  ngOnInit() {}
}
