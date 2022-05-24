import { TestBed } from '@angular/core/testing';

import { MainSellIschinService } from './main-sell-ischin.service';

describe('MainSellIschinService', () => {
  let service: MainSellIschinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainSellIschinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
