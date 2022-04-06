import { TestBed } from '@angular/core/testing';

import { SellEffectsService } from './sell-effects.service';

describe('SellEffectsService', () => {
  let service: SellEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
