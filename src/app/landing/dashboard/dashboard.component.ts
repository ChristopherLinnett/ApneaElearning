import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import Chart from 'Chart.js/auto'
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
chartData = []
labels;
backgroundColour = 'rgba(54, 162, 235, 0.2)';
borderColour = 'rgba(54, 162, 235, 1)';
chartConfig;


  constructor(private dataStorageService: DatastorageService ,private modalController: ModalController, public userService: UserService, private alertCtrl: AlertController) { 
 
  }

  ngOnInit() {
    this.labels = this.studentList.map(x => this.studentList.indexOf(x)+1)
    var allUsersEmail = this.userService.userlist.map(x => x.email)
    var studentUserIndexes = []
    for (let student of this.studentList){
        studentUserIndexes.push(allUsersEmail.indexOf(student))
    }
    console.log(studentUserIndexes)

    this.chartData = studentUserIndexes.map(x => this.userService.userlist[x].availableCourses[0].unlockedChapters.length-1)
    this.chartConfig = {
      type: this.chartType,
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Completed Modules',
          data: this.chartData,
          backgroundColor: this.backgroundColour,
          borderColor: this.borderColour,
          borderWidth: 1
        }]
      },
      options: {
                
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 1,
          }
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Student Chapter Progression",
            position: 'bottom',
            alignment: 'center',
            font: {
              size: 12
            }
          },
        }
      }
    }


    this.createChart();
  }

  createChart() {
    this.chart = new Chart(this.canvas.nativeElement, this.chartConfig as any)
  }

  closeModal(){
    this.modalController.dismiss()
  }
  async deleteStudentAlert(studentEmail,studentListIndex) {
    //alert to have user confirm they want to close their course content
    let alert = await this.alertCtrl.create({
      header: `Delete Student`,
      message: `Are you sure you want to remove ${studentEmail}? this cannot be undone`,
      buttons: [
        {
          text: 'Yes',
          cssClass: 'primary',
          id: 'confirm-button',
          handler:async () => {
            await this.deleteStudent(studentEmail, studentListIndex)
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
          handler:async () => {
            await this.cancelCourse()
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


async cancelCourse(){
const thisCourseID = this.courseID;
const allThisUserCourseIDs = this.userService.user.courses.map(x=> x.courseID);   //get CourseIds by index for matching
const thisCourseIndex = allThisUserCourseIDs.indexOf(thisCourseID)
const allUsersEmail = this.userService.userlist.map(x=>x.email)
const thisUserIndex = allUsersEmail.indexOf(this.userService.user.email)
this.userService.userlist[thisUserIndex].courses.splice(thisCourseIndex,1); //remove course from instructor
for (let student of this.studentList){
  let studentIndex = allUsersEmail.indexOf(student)
  let thisStudentsCourseIDs = this.userService.userlist[studentIndex].availableCourses.map(x=>x.courseID)
  let thisStudentCourseIndex = thisStudentsCourseIDs.indexOf(this.courseID)
  this.userService.userlist[studentIndex].availableCourses.splice(thisStudentCourseIndex,1)
}
await this.dataStorageService.save('users',this.userService.userlist)
}
async deleteStudent(studentEmail,studentListIndex){
  const thisCourseID = this.courseID;
  const allThisUserCourseIDs = this.userService.user.courses.map(x=> x.courseID);   //get CourseIds by index for matching
  const thisCourseIndex = allThisUserCourseIDs.indexOf(thisCourseID)
  const allUsersEmail = this.userService.userlist.map(x=>x.email)
  const thisUserIndex = allUsersEmail.indexOf(this.userService.user.email)

  var studentIndex = allUsersEmail.indexOf(studentEmail)
  let thisStudentsCourseIDs = this.userService.userlist[studentIndex].availableCourses.map(x=>x.courseID)
  let thisStudentCourseIndex = thisStudentsCourseIDs.indexOf(this.courseID)
  this.userService.userlist[studentIndex].availableCourses.splice(thisStudentCourseIndex,1)
  this.studentList.splice(studentListIndex,1)       //course removed from student
  studentIndex = this.userService.userlist[thisUserIndex].courses[thisCourseIndex].students.indexOf(studentEmail)
  console.log(this.userService.userlist[thisUserIndex].courses[thisCourseIndex].students)
  console.log(studentIndex)
  this.userService.userlist[thisUserIndex].courses[thisCourseIndex].students.splice(studentIndex,1) //remove student from course in instructor
  console.log(this.userService.userlist[thisUserIndex].courses[thisCourseIndex].students)
  this.chart.update()
  await this.dataStorageService.save('users',this.userService.userlist)
}
}
