import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { IonicModule } from '@ionic/angular';
import { ShowhidetabsDirective } from 'src/app/directives/showhidetabs.directive';

@NgModule({
  declarations: [CategoriesComponent, ShowhidetabsDirective],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    CategoriesComponent,
    ShowhidetabsDirective
  ]
})
export class SharedModule { }
