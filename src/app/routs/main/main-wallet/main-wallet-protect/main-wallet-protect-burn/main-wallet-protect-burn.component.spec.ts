import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWalletProtectBurnComponent } from './main-wallet-protect-burn.component';

describe('MainWalletProtectBurnComponent', () => {
  let component: MainWalletProtectBurnComponent;
  let fixture: ComponentFixture<MainWalletProtectBurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWalletProtectBurnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWalletProtectBurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
