import { StudentConstructor } from './../../instructor/createcourse/studentconstructor.class';
import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import Chart from 'Chart.js/auto';
import { DatastorageService } from 'src/app/datastorage.service';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input('courseDate') courseDate;
  @Input('courseType') courseType;
  @Input('studentList') studentList = [];
  @Input('courseID') courseID;

  @ViewChild('chartCanvas', { static: true }) canvas;
  chart: any;

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

  ngOnInit() {
    this.labels = this.studentList.map((x) => this.studentList.indexOf(x) + 1);
    this.chartData = this.studentList.map((x) => this.userService.userlist[`${x}`].availableCourses[`${this.courseID}`].unlockedChapters.length-1)
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

  createChart() {
    this.chart = new Chart(this.canvas.nativeElement, this.chartConfig as any);
  }

  closeModal() {
    this.modalController.dismiss();
  }
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
            this.closeModal();
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

  async cancelCourse() {          //for each student, remove course with same courseID, for Instructor. Rebuild without that in courses
    var studentsToClear = []
    var studentsToEdit = []
    for (let student of this.studentList){
      if (Object.keys(this.userService.userlist[`${student}`].availableCourses).length<2){
        studentsToClear.push(student)
      }
      else {
        studentsToEdit.push(student)
      }
    }
    var newUserList = {}
    for (let user of Object.keys(this.userService.userlist)){
      if (user !in studentsToClear && user !in studentsToEdit && user != this.userService.user.email){
        newUserList[`${user}`]= this.userService.userlist[`${user}`]
      }
      else {
        if (user !in studentsToClear && user != this.userService.user.email){
          const thisUser = this.userService.userlist[`${user}`]
          const newAvailableCourses = {}
          for (let course of Object.keys(thisUser.availableCourses)){
            if (course != this.courseID){
              newAvailableCourses[`${course}`]= thisUser.availableCourses[`${course}`]
            }
          }
          const newUser = new StudentConstructor(thisUser.index,thisUser.email,thisUser.role,thisUser.courses,newAvailableCourses,thisUser.firstName,thisUser.lastName,thisUser.password)
          newUserList[`${newUser.email}`] = newUser
        }       //students now cleared of courses or deleted
        else {
          if (user == this.userService.user.email){
            const thisUser = this.userService.userlist[`${user}`]
            var newCourses = {}
            for (let course of Object.keys(thisUser.courses)){
              if (course != this.courseID){
                newCourses[`${course}`]=thisUser.courses[`${course}`]
              }
            }
            const newTeacher = new StudentConstructor(thisUser.index,thisUser.email,thisUser.role,newCourses,thisUser.availableCourses,thisUser.firstName,thisUser.lastName,thisUser.password)
          newUserList[`${newTeacher.email}`] = newTeacher
          }
        }
      }    
      await this.dataStorageService.save('users',newUserList)
      await this.userService.updateUserlist()
    }
  

  }
  async deleteStudent(studentEmail, studentListIndex) {     //delete email from local, update userservice file, save userservice
    this.studentList.splice(studentListIndex, 1)
    var thisUserlist= await this.dataStorageService.lookup('users');
    var myUserlist = {}
    for (let student of Object.keys(thisUserlist)){
      if (thisUserlist[`${student}`].email != studentEmail){
        const thisUser = thisUserlist[`${student}`]
        myUserlist[`${student}`] = new StudentConstructor(thisUser.index, thisUser.email, thisUser.role, thisUser.courses, thisUser.availableCourses,thisUser.firstName, thisUser.lastName, thisUser.password)
      } else {
        const thisUser = thisUserlist[`${student}`]
        if (Object.keys(thisUser.availableCourses).length > 1) {
        const newAvailableCourses = {}
        for (let course of Object.keys(thisUser.availableCourses)){
          if (course != this.courseID){
            newAvailableCourses[`${course}`] = thisUser.availableCourses[`${course}`]
          }
        }
        myUserlist[`${student}`] = new StudentConstructor(thisUser.index, thisUser.email, thisUser.role, thisUser.courses, newAvailableCourses,thisUser.firstName, thisUser.lastName, thisUser.password)
      }
    }
      if (student == this.userService.user.email){
        const thisUser = thisUserlist[`${student}`]
        myUserlist[`${thisUser.email}`].courses[`${this.courseID}`].students = this.studentList
      }
    }
    await this.dataStorageService.save('users', myUserlist);
    await this.userService.updateUserlist()
    this.chart.destroy()
     this.ngOnInit()
  }
}
