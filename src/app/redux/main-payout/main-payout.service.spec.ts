import { TestBed } from '@angular/core/testing';

import { MainPayoutService } from './main-payout.service';

describe('MainPayoutService', () => {
  let service: MainPayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainPayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
