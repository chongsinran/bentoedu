import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassHomePageRoutingModule } from './class-home-routing.module';

import { ClassHomePage } from './class-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassHomePageRoutingModule
  ],
  declarations: [ClassHomePage]
})
export class ClassHomePageModule {}
