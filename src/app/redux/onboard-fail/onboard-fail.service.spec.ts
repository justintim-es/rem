import { TestBed } from '@angular/core/testing';

import { OnboardFailService } from './onboard-fail.service';

describe('OnboardFailService', () => {
  let service: OnboardFailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnboardFailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
