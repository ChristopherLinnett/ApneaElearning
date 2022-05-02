import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseLandingPageRoutingModule } from './course-landing-routing.module';

import { CourseLandingPage } from './course-landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseLandingPageRoutingModule
  ],
  declarations: [CourseLandingPage]
})
export class CourseLandingPageModule {}
