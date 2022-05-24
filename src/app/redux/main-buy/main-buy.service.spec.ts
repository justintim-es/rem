import { TestBed } from '@angular/core/testing';

import { MainBuyService } from './main-buy.service';

describe('MainBuyService', () => {
  let service: MainBuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainBuyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
