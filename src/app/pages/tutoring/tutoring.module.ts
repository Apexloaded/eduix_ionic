import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutoringPageRoutingModule } from './tutoring-routing.module';

import { TutoringPage } from './tutoring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutoringPageRoutingModule
  ],
  declarations: [TutoringPage]
})
export class TutoringPageModule {}
