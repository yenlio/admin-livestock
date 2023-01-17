import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent {
  @Input() isVisible = false;
   @Output() isVisibleChange=new EventEmitter<any>();

   handleCancel(){
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
   }
   handleOk(){
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
   }
}
