import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodesavePage } from './codesave.page';

const routes: Routes = [
  {
    path: '',
    component: CodesavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodesavePageRoutingModule {}
