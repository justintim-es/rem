import { TestBed } from '@angular/core/testing';

import { MainSellService } from './main-sell.service';

describe('MainSellService', () => {
  let service: MainSellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainSellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
