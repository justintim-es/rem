import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWalletSendComponent } from './main-wallet-send.component';

describe('MainWalletSendComponent', () => {
  let component: MainWalletSendComponent;
  let fixture: ComponentFixture<MainWalletSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWalletSendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWalletSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
