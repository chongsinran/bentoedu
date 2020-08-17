import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassHomePage } from './class-home.page';

const routes: Routes = [
  {
    path: '',
    component: ClassHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassHomePageRoutingModule {}
