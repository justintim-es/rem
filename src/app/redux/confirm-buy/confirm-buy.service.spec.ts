import { TestBed } from '@angular/core/testing';

import { ConfirmBuyService } from './confirm-buy.service';

describe('ConfirmBuyService', () => {
  let service: ConfirmBuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmBuyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
