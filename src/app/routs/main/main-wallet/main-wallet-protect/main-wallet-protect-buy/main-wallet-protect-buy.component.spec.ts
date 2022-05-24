import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWalletProtectBuyComponent } from './main-wallet-protect-buy.component';

describe('MainWalletProtectBuyComponent', () => {
  let component: MainWalletProtectBuyComponent;
  let fixture: ComponentFixture<MainWalletProtectBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWalletProtectBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWalletProtectBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
