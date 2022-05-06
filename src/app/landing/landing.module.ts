import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import { CreatecourseComponent } from '../instructor/createcourse/createcourse.component';

@NgModule({
  entryComponents: [CreatecourseComponent],
  imports: [CommonModule, FormsModule, IonicModule, LandingPageRoutingModule],
  declarations: [LandingPage, CreatecourseComponent],
})
export class LandingPageModule {}
