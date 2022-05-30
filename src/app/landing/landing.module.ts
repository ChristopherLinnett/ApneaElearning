import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import { CreatecourseComponent } from '../instructor/createcourse/createcourse.component';
import { AfterContentChecked } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  entryComponents: [CreatecourseComponent, DashboardComponent],
  imports: [CommonModule, FormsModule, IonicModule, LandingPageRoutingModule, SwiperModule],
  declarations: [LandingPage, CreatecourseComponent, DashboardComponent],
})
export class LandingPageModule{

}
