import { TestBed } from '@angular/core/testing';

import { MainSellActivateService } from './main-sell-activate.service';

describe('MainSellActivateService', () => {
  let service: MainSellActivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainSellActivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
