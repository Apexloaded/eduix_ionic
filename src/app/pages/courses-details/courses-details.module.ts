import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesDetailsPageRoutingModule } from './courses-details-routing.module';

import { CoursesDetailsPage } from './courses-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesDetailsPageRoutingModule
  ],
  declarations: [CoursesDetailsPage]
})
export class CoursesDetailsPageModule {}
