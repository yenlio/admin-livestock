import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './common/button/button.component';
// import { ButtonLargeComponent } from './common/button/button-large/button-large.component';
// import { CommonComponent } from './common/common.component';

@NgModule({
  declarations: [
    // CommonComponent
    ButtonComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
