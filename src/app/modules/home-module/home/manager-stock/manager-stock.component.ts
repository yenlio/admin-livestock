import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-stock',
  templateUrl: './manager-stock.component.html',
  styleUrls: ['./manager-stock.component.scss']
})
export class ManagerStockComponent {
  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }

}
