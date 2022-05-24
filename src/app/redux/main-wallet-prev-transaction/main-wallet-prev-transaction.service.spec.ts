import { TestBed } from '@angular/core/testing';

import { MainWalletPrevTransactionService } from './main-wallet-prev-transaction.service';

describe('MainWalletPrevTransactionService', () => {
  let service: MainWalletPrevTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainWalletPrevTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
