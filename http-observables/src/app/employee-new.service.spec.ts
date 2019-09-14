import { TestBed } from '@angular/core/testing';

import { EmployeeNewService } from './employee-new.service';

describe('EmployeeNewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeNewService = TestBed.get(EmployeeNewService);
    expect(service).toBeTruthy();
  });
});
