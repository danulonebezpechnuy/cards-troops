import { TestBed } from '@angular/core/testing';

import { FightCalculationService } from './fight-calculation.service';

describe('FightCalculationService', () => {
  let service: FightCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FightCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
