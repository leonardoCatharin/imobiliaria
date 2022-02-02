import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentesadicionaisPageRoutingModule } from './componentesadicionais-routing.module';

import { ComponentesadicionaisPage } from './componentesadicionais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesadicionaisPageRoutingModule
  ],
  declarations: [ComponentesadicionaisPage]
})
export class ComponentesadicionaisPageModule {}
