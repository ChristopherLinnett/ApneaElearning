import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { CourseService } from '../course.service';
import { CurrentModuleService } from './current-module.service';

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.page.html',
  styleUrls: ['./detail-content.page.scss'],
})
export class DetailContentPage implements OnInit {
  selection: string;
  currentTitle: string;
  currentContent: string;
  moduleTitle = "Choose Module"
  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private modalController: ModalController,
    private currentModuleService: CurrentModuleService,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.selection = this.navParams.get('selection');
    if (this.selection == 'start') {
      this.startModules(0, 0);
    }
    if ((this.selection == 'continue')) {
    }
  }
  getModuleList(){
    return this.courseService.getAllModules()
  }

  closeModal() {
    this.modalController.dismiss();
  }
  startModules(moduleIndex, innerIndex) {
    this.selection = '';
    this.currentModuleService.initialise(moduleIndex, innerIndex);
    this.getContent()
  }
  getContent() {
    this.currentTitle = this.courseService.getAllModules()[this.currentModuleService.currentModuleIndex].innerModules[this.currentModuleService.currentInnerIndex].title
    this.currentContent = this.courseService.getAllModules()[this.currentModuleService.currentModuleIndex].innerModules[this.currentModuleService.currentInnerIndex].content
    this.moduleTitle = this.courseService.getAllModules()[this.currentModuleService.currentModuleIndex].title
  }
  onNextClick() {
    this.currentModuleService.next()
    this.getContent()
  }

  async closeModalAlert() {
    let alert = await this.alertCtrl.create({
      header: `Close`,
      message: `Are you sure you want to exit your modules?`,
      buttons: [
        {
          text: 'Yes',
          cssClass: 'primary',
          handler: () => {
            this.closeModal();
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
}
