import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from "ng-apexcharts";

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ManagerPlayerComponent } from './home/manager-player/manager-player.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'manager-player',
    component: ManagerPlayerComponent
  },

];

@NgModule({
  declarations: [
    HomeComponent,
    ManagerPlayerComponent
  ],
  imports: [
    NzGridModule,
    NgApexchartsModule,
    CommonModule,
    HomeModuleRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModuleModule { }
