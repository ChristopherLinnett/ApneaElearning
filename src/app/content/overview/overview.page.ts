import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/users/user.service';
import { CourseService } from '../course.service';
import { DetailContentPage } from '../detail-content/detail-content.page';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  moduleList:{ completed: boolean; innerModules: { completed: boolean; content: string; title: string; }[]; title: string; }[]

  constructor(private homeComp: AppComponent, private userService:UserService, private courseService: CourseService, private modalController: ModalController) { }

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

  async onStart(){
    const modal = await this.modalController.create({
      component:DetailContentPage,
      componentProps: {selection: "start"},backdropDismiss: false
    });
    modal.onDidDismiss().then(() => {

    })
    return modal.present()
  }

async onContinue(){
  const modal = await this.modalController.create({
    component:DetailContentPage,
    componentProps: {selection:"continue"},backdropDismiss: false
  });
  modal.onDidDismiss().then(() => {

  })
  return modal.present()
}
logout(){
  this.userService.logout()
  this.homeComp.checkLogin()
}
  }

