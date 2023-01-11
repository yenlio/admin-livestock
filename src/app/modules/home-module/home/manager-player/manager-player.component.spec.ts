import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPlayerComponent } from './manager-player.component';

describe('ManagerPlayerComponent', () => {
  let component: ManagerPlayerComponent;
  let fixture: ComponentFixture<ManagerPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
