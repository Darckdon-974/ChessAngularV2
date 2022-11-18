import { TestBed } from '@angular/core/testing';

import { CoupService } from './coup.service';

describe('CoupService', () => {
  let service: CoupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
