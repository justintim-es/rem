import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWalletProtectComponent } from './main-wallet-protect.component';

describe('MainWalletProtectComponent', () => {
  let component: MainWalletProtectComponent;
  let fixture: ComponentFixture<MainWalletProtectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWalletProtectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWalletProtectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
