import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/users/user.service';
import { CourseService } from '../course.service';
import { DetailContentPage } from '../detail-content/detail-content.page';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  moduleList: {
    completed: boolean;
    innerModules: { completed: boolean; content: string; title: string }[];
    title: string;
  }[];

  constructor(
    private userService: UserService,
    private courseService: CourseService,
    private modalController: ModalController
  ) {}

  ngOnInit() {}
  async showModules() {
    //creates a modal that prompts for start point in course content from dropdowns
    this.moduleList = this.courseService.AIDA2Default;
    const modal = await this.modalController.create({
      component: DetailContentPage,
      componentProps: {
        selection: 'selection',
        moduleList: this.courseService.AIDA2Default,
      },
      backdropDismiss: false,
    });
    modal.onDidDismiss().then(() => {});
    return modal.present();
  }

  async onStart() {
    //creates a modal that starts from module 1 section 1
    const modal = await this.modalController.create({
      component: DetailContentPage,
      componentProps: { selection: 'start' },
      backdropDismiss: false,
    });
    modal.onDidDismiss().then(() => {});
    return modal.present();
  }

  async onContinue() {
    //creates a modal that calculates the user's progress in content and starts after last completed module
    const modal = await this.modalController.create({
      component: DetailContentPage,
      componentProps: { selection: 'continue' },
      backdropDismiss: false,
    });
    modal.onDidDismiss().then(() => {});
    return modal.present();
  }
  logout() {
    //logs user out
    this.userService.logout();
  }
}
