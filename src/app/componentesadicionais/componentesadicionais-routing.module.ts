import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentesadicionaisPage } from './componentesadicionais.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentesadicionaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesadicionaisPageRoutingModule {}
