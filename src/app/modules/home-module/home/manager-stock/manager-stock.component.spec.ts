import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerStockComponent } from './manager-stock.component';

describe('ManagerStockComponent', () => {
  let component: ManagerStockComponent;
  let fixture: ComponentFixture<ManagerStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
