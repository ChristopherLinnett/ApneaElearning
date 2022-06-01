import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Chart from 'Chart.js/auto'
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

@ViewChild('chartCanvas', { static: true }) canvas;
chart: any;

chartType = 'bar';
chartData = []
labels;
backgroundColour = 'rgba(54, 162, 235, 0.2)';
borderColour = 'rgba(54, 162, 235, 1)';
chartConfig;


  constructor(private modalController: ModalController, public userService: UserService) { 
 
  }

  ngOnInit() {
    this.labels = this.studentList.map(x => this.studentList.indexOf(x)+1)
    var allUsersEmail = this.userService.userlist.map(x => x.email)
    var studentUserIndexes = []
    for (let student of this.studentList){
        studentUserIndexes.push(allUsersEmail.indexOf(student))
    }
    console.log(studentUserIndexes)

    this.chartData = studentUserIndexes.map(x => this.userService.userlist[x].availableCourses[0].unlockedChapters.length)
    this.chartConfig = {
      type: this.chartType,
      data: {
        labels: this.labels,
        datasets: [{
          label: '',
          data: this.chartData,
          backgroundColor: this.backgroundColour,
          borderColor: this.borderColour,
          borderWidth: 2
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
          }
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
}

