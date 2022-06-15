import { TestBed } from '@angular/core/testing';

import { CamionserviceService } from './camionservice.service';

describe('CamionserviceService', () => {
  let service: CamionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
