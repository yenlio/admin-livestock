import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ModalUserComponent } from './user/modal-user/modal-user.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserReducer } from 'src/app/store/userStore/user.reducer';
import { UserEffect } from 'src/app/store/userStore/user.effect';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },


];


@NgModule({
  declarations: [
    UserComponent,
    ModalUserComponent
  ],
  imports: [
    FormsModule,
    NzModalModule,
    NzGridModule,
    NzButtonModule,
    NzDividerModule,
    NzTableModule,
    NzInputModule,
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('demoUser', UserReducer),

  ]
})
export class DemoCRUDModule { }
