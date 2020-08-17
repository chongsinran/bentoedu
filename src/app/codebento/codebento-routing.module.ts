import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodebentoPage } from './codebento.page';

const routes: Routes = [
  {
    path: '',
    component: CodebentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodebentoPageRoutingModule {}
