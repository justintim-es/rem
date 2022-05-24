import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPayoutComponent } from './main-payout.component';

describe('MainPayoutComponent', () => {
  let component: MainPayoutComponent;
  let fixture: ComponentFixture<MainPayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
