import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CourseService } from '../course.service';
import { DetailContentPage } from '../detail-content/detail-content.page';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  moduleList:{ completed: boolean; innerModules: { completed: boolean; content: string; title: string; }[]; title: string; }[]

  constructor(private courseService: CourseService, private modalController: ModalController) { }

  ngOnInit() {
  }
async showModules() {
  this.moduleList = this.courseService.AIDA2Default
    const modal = await this.modalController.create({
      component:DetailContentPage,
      componentProps: {selection: "selection",moduleList: this.courseService.AIDA2Default},backdropDismiss: false
    });
    modal.onDidDismiss().then(() => {
      
    })
    return modal.present()
  }
  }

