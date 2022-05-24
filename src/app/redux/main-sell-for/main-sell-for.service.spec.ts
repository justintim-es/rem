import { TestBed } from '@angular/core/testing';

import { MainSellForService } from './main-sell-for.service';

describe('MainSellForService', () => {
  let service: MainSellForService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainSellForService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
