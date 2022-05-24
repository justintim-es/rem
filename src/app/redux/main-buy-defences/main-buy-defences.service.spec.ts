import { TestBed } from '@angular/core/testing';

import { MainBuyDefencesService } from './main-buy-defences.service';

describe('MainBuyDefencesService', () => {
  let service: MainBuyDefencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainBuyDefencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
