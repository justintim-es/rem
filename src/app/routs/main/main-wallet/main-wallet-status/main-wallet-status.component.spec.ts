import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWalletStatusComponent } from './main-wallet-status.component';

describe('MainWalletStatusComponent', () => {
  let component: MainWalletStatusComponent;
  let fixture: ComponentFixture<MainWalletStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWalletStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWalletStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
