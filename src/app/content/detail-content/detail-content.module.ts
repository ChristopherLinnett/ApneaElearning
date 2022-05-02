import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailContentPageRoutingModule } from './detail-content-routing.module';

import { DetailContentPage } from './detail-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailContentPageRoutingModule
  ],
  declarations: [DetailContentPage]
})
export class DetailContentPageModule {}
