import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodesavePageRoutingModule } from './codesave-routing.module';

import { CodesavePage } from './codesave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodesavePageRoutingModule
  ],
  declarations: [CodesavePage]
})
export class CodesavePageModule {}
