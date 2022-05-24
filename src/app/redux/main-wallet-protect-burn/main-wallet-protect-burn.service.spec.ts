import { TestBed } from '@angular/core/testing';

import { MainWalletProtectBurnService } from './main-wallet-protect-burn.service';

describe('MainWalletProtectBurnService', () => {
  let service: MainWalletProtectBurnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainWalletProtectBurnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
