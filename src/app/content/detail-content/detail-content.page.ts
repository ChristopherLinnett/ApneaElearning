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
  getModuleList(){                              //returns the data for the whole course
    return this.courseService.getAllModules()
  }

  closeModal() {                                //closes the module
    this.modalController.dismiss();
  }
  startModules(moduleIndex, innerIndex) {       //accepts module/section as inputs and returns content fo that section
    this.selection = '';
    this.currentModuleService.initialise(moduleIndex, innerIndex);
    this.getContent()
  }
  getContent() {                  //pulls content for current referenced module/section
    this.currentTitle = this.courseService.getAllModules()[this.currentModuleService.currentModuleIndex].innerModules[this.currentModuleService.currentInnerIndex].title
    this.currentContent = this.courseService.getAllModules()[this.currentModuleService.currentModuleIndex].innerModules[this.currentModuleService.currentInnerIndex].content
    this.moduleTitle = this.courseService.getAllModules()[this.currentModuleService.currentModuleIndex].title
  }
  onNextClick() {                 //moves content forward one section
    this.currentModuleService.next()
    this.getContent()
  }
  onBackClick() {                 //moves content back one section
    this.currentModuleService.back()
    this.getContent()
  }

  async closeModalAlert() {       //alert to have user confirm they want to close their course content
    let alert = await this.alertCtrl.create({
      header: `Close`,
      message: `Are you sure you want to exit your modules?`,
      buttons: [
        {
          text: 'Yes',
          cssClass: 'primary',
          id: 'confirm-button',
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
