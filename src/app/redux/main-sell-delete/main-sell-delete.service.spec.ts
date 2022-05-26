import { TestBed } from '@angular/core/testing';

import { MainSellDeleteService } from './main-sell-delete.service';

describe('MainSellDeleteService', () => {
  let service: MainSellDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainSellDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
