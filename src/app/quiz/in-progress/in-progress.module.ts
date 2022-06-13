import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';

import { InProgressPageRoutingModule } from './in-progress-routing.module';

import { InProgressPage } from './in-progress.page';
import { SwipernavComponent } from 'src/app/shared/swipernav/swipernav.component';
import { DetailContentPage } from 'src/app/content/detail-content/detail-content.page';

@NgModule({
  entryComponents: [],
  exports: [],
  imports: [
    SwiperModule,
    CommonModule,
    FormsModule,
    IonicModule,
    InProgressPageRoutingModule,
  ],
  declarations: [],
})
export class InProgressPageModule {}
