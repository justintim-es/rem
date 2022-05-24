import { TestBed } from '@angular/core/testing';

import { MainWalletProtectService } from './main-wallet-protect.service';

describe('MainWalletProtectService', () => {
  let service: MainWalletProtectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainWalletProtectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
