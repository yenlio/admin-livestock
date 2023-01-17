import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlayerComponent } from './detail-player.component';

describe('DetailPlayerComponent', () => {
  let component: DetailPlayerComponent;
  let fixture: ComponentFixture<DetailPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
