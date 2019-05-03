import { TestBed } from '@angular/core/testing';

import { NagpServiceService } from './nagp-service.service';

describe('NagpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NagpServiceService = TestBed.get(NagpServiceService);
    expect(service).toBeTruthy();
  });
});
