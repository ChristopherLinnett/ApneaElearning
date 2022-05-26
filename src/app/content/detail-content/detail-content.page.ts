import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { CourseService } from '../course.service';
import { CurrentModuleService } from './current-module.service';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {Navigation,Pagination,EffectCoverflow} from "swiper";
import { ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
SwiperCore.use([Navigation,Pagination,EffectCoverflow])

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.page.html',
  styleUrls: ['./detail-content.page.scss'],
})
export class DetailContentPage implements OnInit {
  @ViewChild('swiper') swiper: SwiperComponent
  selection: string;
  currentTitle: string;
  currentContent: string;
  moduleTitle = 'Choose Module';
  config: SwiperOptions = {slidesPerView: 'auto' , effect: 'coverflow'}

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private modalController: ModalController,
    public currentModuleService: CurrentModuleService,
    public courseService: CourseService
  ) {}

  ngOnInit() {
    this.selection = this.navParams.get('selection');
    if (this.selection == 'start') {
      this.startModules(0, 0);
    }
    if (this.selection == 'continue') {
    }
  }
  getModuleList() {
    //returns the data for the whole course
    return this.courseService.getAllModules();
  }

  closeModal() {
    //closes the module
    this.modalController.dismiss();
  }
  startModules(moduleIndex, innerIndex) {
    //accepts module/section as inputs and returns content fo that section
    this.selection = '';
    this.currentModuleService.initialise(moduleIndex, innerIndex);
    this.getContent();
  }
  getContent() {
    //pulls content for current referenced module/section
    this.currentTitle =
      this.courseService.getAllModules()[
        this.currentModuleService.currentModuleIndex
      ].innerModules[this.currentModuleService.currentInnerIndex].title;
    this.currentContent =
      this.courseService.getAllModules()[
        this.currentModuleService.currentModuleIndex
      ].innerModules[this.currentModuleService.currentInnerIndex].content;
    this.moduleTitle =
      this.courseService.getAllModules()[
        this.currentModuleService.currentModuleIndex
      ].title;
  }
  launchModuleQuiz(moduleNo){
    console.log(`launch quiz for chapter ${moduleNo+1}`)
  }

  onNextClick() {
    //moves content forward one section
    if (this.currentModuleService.currentInnerIndex < this.currentModuleService.innerModuleCount-1){
    this.currentModuleService.next();
    this.getContent();
    this.swiper.swiperRef.slideNext()}
    else {
      this.launchModuleQuiz(this.currentModuleService.currentModuleIndex)
    }
  }
  onBackClick() {
    //moves content back one section
    if (this.currentModuleService.currentInnerIndex > 0){

    this.currentModuleService.back();
    this.getContent();
    this.swiper.swiperRef.slidePrev()
    }
  }

  async closeModalAlert() {
    //alert to have user confirm they want to close their course content
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
