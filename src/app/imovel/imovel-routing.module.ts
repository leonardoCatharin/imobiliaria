import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImovelPage } from './imovel.page';

const routes: Routes = [
  {
    path: '',
    component: ImovelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImovelPageRoutingModule {}
