import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from "ng-apexcharts";

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ManagerPlayerComponent } from './home/manager-player/manager-player.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DetailPlayerComponent } from './home/manager-player/detail-player/detail-player.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagerStockComponent } from './home/manager-stock/manager-stock.component';
import { CreateStockComponent } from './home/manager-stock/create-stock/create-stock.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'manager-player',
    component: ManagerPlayerComponent
  }, {
    path: 'manager-stock',
    component: ManagerStockComponent
  },

];

@NgModule({
  declarations: [
    HomeComponent,
    ManagerPlayerComponent,
    DetailPlayerComponent,
    ManagerStockComponent,
    CreateStockComponent
  ],
  imports: [
    NzAvatarModule,
    NzModalModule,
    NzButtonModule,
    NzDividerModule,
    NzTableModule,
    NzInputModule,
    NzGridModule,
    NgApexchartsModule,
    CommonModule,
    ReactiveFormsModule,
    HomeModuleRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModuleModule { }
