import { TestBed } from '@angular/core/testing';

import { BackendConnService } from './backend-conn.service';

describe('BackendConnService', () => {
  let service: BackendConnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendConnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
