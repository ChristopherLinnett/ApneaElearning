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
    this.thisAvailableChapters = this.thisCourse.unlockedChapters;
  }

  /**
   * It takes a module number as a parameter, sets the current module index to that number, and then
   * launches the quiz modal.
   * @param moduleNo - The module number that the user is currently on.
   * @returns The modal is being returned.
   */
  async launchModuleQuiz(moduleNo) {
    this.currentModuleService.currentModuleIndex = moduleNo;
    const quizmodal = await this.modalController.create({
      component: InProgressPage,
      cssClass: 'my-custom-class',
    });
    return await quizmodal.present();
  }

  /**
   * The ngOnInit() function is a lifecycle hook that is called after Angular has initialized all
   * data-bound properties of a directive.
   */
  ngOnInit() {
    console.log(this.thisCourse);
  }
  /**
   * The function onClickModule() is called when the user clicks on a module. The function then
   * navigates the user to the overview page.
   * </code>
   */
  onClickModule() {
    this.router.navigate(['overview']);
  }
  /**
   * "When the user clicks on a chapter, the chapter number is passed to the currentModuleService,
   * which is then used to determine which chapter to display in the DetailContentPage."
   * </code>
   * @param chapter - the index of the chapter that was clicked
   * @returns The modal.present() is returning a promise.
   */
  async launchModule(chapter) {
    this.currentModuleService.currentModuleIndex = chapter;
    const modal = await this.modalController.create({
      component: DetailContentPage,
      componentProps: { selection: 'start' },
      backdropDismiss: false,
    });
    modal.onDidDismiss().then(() => {});
    return modal.present();
  }

  /**
   * The showUserOptions() function is called when the user clicks on the user icon in the top right
   * corner of the page. This function calls the showUserOptions() function in the userService.ts file.
   */
  async showUserOptions() {
    this.userService.showUserOptions();
  }
}
