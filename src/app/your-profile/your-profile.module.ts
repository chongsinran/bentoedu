import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourProfilePageRoutingModule } from './your-profile-routing.module';

import { YourProfilePage } from './your-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourProfilePageRoutingModule
  ],
  declarations: [YourProfilePage]
})
export class YourProfilePageModule {}
