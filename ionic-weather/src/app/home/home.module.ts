import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

import { DayPipe } from "../pipes/day.pipe";
import { DateFormatingPipe } from "../pipes/date-formating.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
    DayPipe,
    DateFormatingPipe,
  ],
  exports: [
    DayPipe,
    DateFormatingPipe,
  ]
})
export class HomePageModule {}