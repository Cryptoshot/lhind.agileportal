import { TestBed } from '@angular/core/testing';

import { TeilnehmerService } from './teilnehmer.service';

describe('TeilnehmerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeilnehmerService = TestBed.get(TeilnehmerService);
    expect(service).toBeTruthy();
  });
});
