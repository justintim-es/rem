import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWalletPrevTransactionComponent } from './main-wallet-prev-transaction.component';

describe('MainWalletPrevTransactionComponent', () => {
  let component: MainWalletPrevTransactionComponent;
  let fixture: ComponentFixture<MainWalletPrevTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWalletPrevTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWalletPrevTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
