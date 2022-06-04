import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CurrentModuleService } from '../content/detail-content/current-module.service';
import { DetailContentPage } from '../content/detail-content/detail-content.page';
import { InProgressPage } from '../quiz/in-progress/in-progress.page';
import { UserService } from '../users/user.service';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-landing',
  templateUrl: './course-landing.page.html',
  styleUrls: ['./course-landing.page.scss'],
})
export class CourseLandingPage implements OnInit {
  thisCourse;
  quizAvailable = true;
  thisAvailableChapters;
  constructor(
    private currentModuleService: CurrentModuleService,
    public courseService: CourseService,
    public userService: UserService,
    private router: Router,
    private modalController: ModalController
  ) {
    this.thisCourse = this.courseService.getCourse();
    this.thisAvailableChapters = this.thisCourse.unlockedChapters
  }

  ngOnInit() {
    console.log(this.thisCourse)

  }
  onClickModule() {
    //move to course overview page
    this.router.navigate(['overview']);
  }
  async launchModule(chapter) {
      //creates a modal that calculates the user's progress in content and starts after last completed module
      this.currentModuleService.currentModuleIndex=chapter
      const modal = await this.modalController.create({
        component: DetailContentPage,
        componentProps: { selection: 'start' },
        backdropDismiss: false,
      });
      modal.onDidDismiss().then(() => {});
      return modal.present();
    }
      
  launchQuiz() {
    this.router.navigate(['/app-landing']); //move to quiz in progress page
  }

  async showUserOptions() {
    //logs out  user
    this.userService.showUserOptions();
  }
}
