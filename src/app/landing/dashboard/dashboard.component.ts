import {
  CourseConstructor,
  StudentConstructor,
} from './../../instructor/createcourse/studentconstructor.class';
import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AlertController, IonModal, ModalController } from '@ionic/angular';
import Chart from 'Chart.js/auto';
import { DatastorageService } from 'src/app/datastorage.service';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('addStudentModal') addStudentModal: IonModal;
  @Input('courseDate') courseDate;
  @Input('courseType') courseType;
  @Input('studentList') studentList = [];
  @Input('courseID') courseID;
  invalidEntry = false;
  @ViewChild('chartCanvas', { static: true }) canvas;
  chart: any;
  email = '';
  chartType = 'bar';
  chartData = [];
  labels;
  backgroundColour = 'rgba(54, 162, 235, 0.2)';
  borderColour = 'rgba(54, 162, 235, 1)';
  chartConfig;

  constructor(
    private dataStorageService: DatastorageService,
    private modalController: ModalController,
    public userService: UserService,
    private alertCtrl: AlertController
  ) {}

  /**
   * It takes the data from the database and uses it to create a chart.
   */
  async ngOnInit() {
    await this.userService.updateUserlist();
    this.labels = this.studentList.map((x) => this.studentList.indexOf(x) + 1);
    console.log(
      this.userService.userlist[
        `${this.studentList[this.studentList.length - 1]}`
      ]
    );
    this.chartData = this.studentList.map(
      (x) =>
        this.userService.userlist[`${x}`]['availableCourses'][
          `${this.courseID}`
        ]['unlockedChapters'].length - 1
    );
    this.chartConfig = {
      type: this.chartType,
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Completed Modules',
            data: this.chartData,
            backgroundColor: this.backgroundColour,
            borderColor: this.borderColour,
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 1,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Student Chapter Progression',
            position: 'bottom',
            alignment: 'center',
            font: {
              size: 12,
            },
          },
        },
      },
    };

    this.createChart();
  }

  /**
   * The function is called when the user clicks the "Add Student" button. The function then calls the
   * present() function on the addStudentModal object.
   */
  launchAddStudentModal() {
    this.addStudentModal.present();
  }

  /**
   * Create a new chart using the canvas element and the chartConfig object.
   */
  createChart() {
    this.chart = new Chart(this.canvas.nativeElement, this.chartConfig as any);
  }
  
  /**
   * The function is called when the user clicks the "X" button in the top right corner of the modal.
   * The function dismisses the modal
   */
  exitThisModal() {
    this.modalController.dismiss();
  }
  /**
   * The function is called when the user successfully adds a student on the modal. The function closes
   * the modal.
   */
  closeModal() {
    this.addStudentModal.dismiss();
  }


  /**
   * It creates an alert that asks the user if they want to delete a student. If they click yes, it
   * calls the deleteStudent function.
   * @param studentEmail - the email of the student to be deleted
   * @param studentListIndex - the index of the student in the list of students
   */
  async deleteStudentAlert(studentEmail, studentListIndex) {
    //alert to have user confirm they want to close their course content
    let alert = await this.alertCtrl.create({
      header: `Delete Student`,
      message: `Are you sure you want to remove ${studentEmail}? this cannot be undone`,
      buttons: [
        {
          text: 'Yes',
          cssClass: 'primary',
          id: 'confirm-button',
          handler: async () => {
            await this.deleteStudent(studentEmail, studentListIndex);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
        },
      ],
    });
    alert.present();
  }

  /**
   * This function creates an alert that asks the user if they want to cancel their course. If they
   * click yes, it calls the cancelCourse() function and closes the modal. If they click no, it closes
   * the alert.
   */
  async cancelCourseAlert() {
    //alert to have user confirm they want to close their course content
    let alert = await this.alertCtrl.create({
      header: `Cancel Course`,
      message: `Are you sure you want to cancel this course? This cannot be undone`,
      buttons: [
        {
          text: 'Yes',
          cssClass: 'primary',
          id: 'confirm-button',
          handler: async () => {
            await this.cancelCourse();
            this.exitThisModal();
          },
        },
        {
          text: "Don't Cancel",
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
        },
      ],
    });
    alert.present();
  }

  /**
   * For each student, remove course with same courseID, for Instructor. Rebuild without that in
   * courses.
   * </code>
   */
  async cancelCourse() {
    //for each student, remove course with same courseID, for Instructor. Rebuild without that in courses
    var studentsToClear = [];
    var studentsToEdit = [];
    for (let student of this.studentList) {
      console.log(student, this.userService.userlist[`${student}`])
      if (
        Object.keys(this.userService.userlist[`${student}`].availableCourses)
          .length < 2
      ) {
        studentsToClear.push(student);
      } else {
        studentsToEdit.push(student);
      }
    }
    var newUserList = {};
    for (let user of Object.keys(this.userService.userlist)) {
      if (
        user! in studentsToClear &&
        user! in studentsToEdit &&
        user != this.userService.user.email
      ) {
        newUserList[`${user}`] = this.userService.userlist[`${user}`];
      } else {
        if (user! in studentsToClear && user != this.userService.user.email) {
          const thisUser = this.userService.userlist[`${user}`];
          const newAvailableCourses = {};
          for (let course of Object.keys(thisUser.availableCourses)) {
            if (course != this.courseID) {
              newAvailableCourses[`${course}`] =
                thisUser.availableCourses[`${course}`];
            }
          }
          const newUser = new StudentConstructor(
            thisUser.index,
            thisUser.email,
            thisUser.role,
            thisUser.courses,
            newAvailableCourses,
            thisUser.firstName,
            thisUser.lastName,
            thisUser.password
          );
          newUserList[`${newUser.email}`] = newUser;
        } //students now cleared of courses or deleted
        else {
          if (user == this.userService.user.email) {
            const thisUser = this.userService.userlist[`${user}`];
            var newCourses = {};
            for (let course of Object.keys(thisUser.courses)) {
              if (course != this.courseID) {
                newCourses[`${course}`] = thisUser.courses[`${course}`];
              }
            }
            const newTeacher = new StudentConstructor(
              thisUser.index,
              thisUser.email,
              thisUser.role,
              newCourses,
              thisUser.availableCourses,
              thisUser.firstName,
              thisUser.lastName,
              thisUser.password
            );
            newUserList[`${newTeacher.email}`] = newTeacher;
          }
        }
      }
      await this.dataStorageService.save('users', newUserList);
      await this.userService.updateUserlist();
    }
  }
  async addStudent(studentEmail) {
    this.email = '';
    this.invalidEntry = false;
    if (studentEmail.length > 5 && studentEmail.includes('@')) {
      this.studentList.push(studentEmail);
      var thisUserlist = await this.dataStorageService.lookup('users');
      thisUserlist[`${this.userService.user.email}`].courses[
        `${this.courseID}`
      ].students.push(studentEmail);
      if (!Object.keys(thisUserlist).includes(studentEmail)) {
        thisUserlist[`${studentEmail}`] = new StudentConstructor(
          Object.keys(thisUserlist).length,
          studentEmail,
          'student',
          {},
          {},
          '',
          '',
          studentEmail
        );
        thisUserlist[`${studentEmail}`]['availableCourses'][
          `${this.courseID}`
        ] = new CourseConstructor(
          this.courseID,
          0,
          this.courseDate,
          this.courseType,
          this.userService.getUsername()
        );

        console.log(
          thisUserlist[`${studentEmail}`],
          this.studentList.includes(studentEmail)
        );
        await this.dataStorageService.save('users', thisUserlist);
        this.chart.destroy();
        await this.ngOnInit();
        this.closeModal();
      } else {
        thisUserlist[`${studentEmail}`].availableCourses[`${this.courseID}`] =
          new CourseConstructor(
            this.courseID,
            0,
            this.courseDate,
            this.courseType,
            this.userService.user.email
          );
        await this.dataStorageService.save('users', thisUserlist);
      }
    } else {
      setTimeout(() => {
        this.invalidEntry = true;
      }, 100);
    }
  }

  /**
   * It deletes a student from the course, and updates the userlist file.
   * </code>
   * @param studentEmail - the email of the student to be deleted
   * @param studentListIndex - the index of the student in the studentList array
   */
  async deleteStudent(studentEmail, studentListIndex) {
    //delete email from local, update userservice file, save userservice
    this.studentList.splice(studentListIndex, 1);
    var thisUserlist = await this.dataStorageService.lookup('users');
    var myUserlist = {};
    for (let student of Object.keys(thisUserlist)) {
      if (thisUserlist[`${student}`].email != studentEmail) {
        const thisUser = thisUserlist[`${student}`];
        myUserlist[`${student}`] = new StudentConstructor(
          thisUser.index,
          thisUser.email,
          thisUser.role,
          thisUser.courses,
          thisUser.availableCourses,
          thisUser.firstName,
          thisUser.lastName,
          thisUser.password
        );
      } else {
        const thisUser = thisUserlist[`${student}`];
        if (Object.keys(thisUser.availableCourses).length > 1) {
          const newAvailableCourses = {};
          for (let course of Object.keys(thisUser.availableCourses)) {
            if (course != this.courseID) {
              newAvailableCourses[`${course}`] =
                thisUser.availableCourses[`${course}`];
            }
          }
          myUserlist[`${student}`] = new StudentConstructor(
            thisUser.index,
            thisUser.email,
            thisUser.role,
            thisUser.courses,
            newAvailableCourses,
            thisUser.firstName,
            thisUser.lastName,
            thisUser.password
          );
        }
      }
      if (student == this.userService.user.email) {
        const thisUser = thisUserlist[`${student}`];
        myUserlist[`${thisUser.email}`].courses[`${this.courseID}`].students =
          this.studentList;
      }
    }
    await this.dataStorageService.save('users', myUserlist);
    await this.userService.updateUserlist();
    this.chart.destroy();
    await this.ngOnInit();
  }
}
