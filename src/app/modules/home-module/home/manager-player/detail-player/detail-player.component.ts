import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detail-player',
  templateUrl: './detail-player.component.html',
  styleUrls: ['./detail-player.component.scss']
})
export class DetailPlayerComponent {
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
