import { TestBed } from '@angular/core/testing';

import { FightResolvingService } from './fight-resolving.service';

describe('FightResolvingService', () => {
  let service: FightResolvingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FightResolvingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
