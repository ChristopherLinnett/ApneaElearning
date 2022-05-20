import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import { CreatecourseComponent } from '../instructor/createcourse/createcourse.component';
import { AfterContentChecked } from '@angular/core';

@NgModule({
  entryComponents: [CreatecourseComponent],
  imports: [CommonModule, FormsModule, IonicModule, LandingPageRoutingModule, SwiperModule],
  declarations: [LandingPage, CreatecourseComponent],
})
export class LandingPageModule{

}
