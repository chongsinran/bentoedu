import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodebentoPageRoutingModule } from './codebento-routing.module';

import { CodebentoPage } from './codebento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodebentoPageRoutingModule
  ],
  declarations: [CodebentoPage]
})
export class CodebentoPageModule {}
