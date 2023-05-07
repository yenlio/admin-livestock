import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-player',
  templateUrl: './manager-player.component.html',
  styleUrls: ['./manager-player.component.scss'],
})
export class ManagerPlayerComponent {
  isVisible = false;
  listOfData: any[] = [
    {
      STT: 1,
      code: 'GRJLLKNFJ',
      fullName: 'Nguyễn Văn A',
      Xu: 12,
      payment: 1.5,
      xuCP: 1200,
    },
    {
      STT: 2,
      code: 'SGDFGDGF',
      fullName: 'Nguyễn Văn B',
      Xu: 12,
      payment: 1.5,
      xuCP: 1200,
    },
    {
      STT: 3,
      code: 'JGHJGHJGJG',
      fullName: 'Nguyễn Văn C',
      Xu: 12,
      payment: 1.5,
      xuCP: 1200,
    },
    {
      STT: 4,
      code: 'RTYRYTRYRY',
      fullName: 'Nguyễn Văn D',
      Xu: 12,
      payment: 1.5,
      xuCP: 1235,
    },
    {
      STT: 5,
      code: 'GRJLLKNFJ',
      fullName: 'Nguyễn Văn A',
      Xu: 12,
      payment: 1.5,
      xuCP: 1200,
    },
    {
      STT: 6,
      code: 'SGDFGDGF',
      fullName: 'Nguyễn Văn B',
      Xu: 12,
      payment: 1.5,
      xuCP: 1200,
    },
    {
      STT: 7,
      code: 'JGHJGHJGJG',
      fullName: 'Nguyễn Văn C',
      Xu: 12,
      payment: 1.5,
      xuCP: 1200,
    },
    {
      STT: 8,
      code: 'RTYRYTRYRY',
      fullName: 'Nguyễn Văn F',
      Xu: 12,
      payment: 1.5,
      xuCP: 1235,
    },
  ];

  showstt = true;
  showMa = true;
  showName = true;
  showXu = true;
  showLai = true;
  showCp = true;

  columns = [
    { name: 'STT' },
    { name: 'Mã' },
    { name: 'Họ và tên' },
    { name: 'Xu' },
    { name: 'Lãi/lỗ' },
    { name: 'Số cp đã mua' },
  ];
  selectedColumns: any;
  showModal(): void {
    this.isVisible = true;
  }
  // toggleColumns() {
  //   this.columns.forEach(column => {
  //     column.visible = this.selectedColumns.includes(column.name);
  //   });
  // }
}
