import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DetailContentPage } from './content/detail-content/detail-content.page';
import { IonicStorageModule } from '@ionic/storage-angular';
import { SwipernavComponent } from './shared/swipernav/swipernav.component';
import { InProgressPageModule } from './quiz/in-progress/in-progress.module';
import { InProgressPage } from './quiz/in-progress/in-progress.page';

@NgModule({
  declarations: [AppComponent, DetailContentPage,SwipernavComponent, InProgressPage],
  entryComponents: [DetailContentPage, SwipernavComponent, InProgressPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    CommonModule,
    SwiperModule,
    IonicStorageModule.forRoot(),
  ],
  exports: [
    SwipernavComponent
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
