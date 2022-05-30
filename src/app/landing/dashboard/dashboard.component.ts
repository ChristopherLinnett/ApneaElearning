import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
@Input('courseDate') courseDate;
@Input('courseType') courseType;
@Input('studentList') studentList;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss()
  }
}

