import { TestBed } from '@angular/core/testing';

import { CareerApiServiceService } from './career-api-service.service';

describe('CareerApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CareerApiServiceService = TestBed.get(CareerApiServiceService);
    expect(service).toBeTruthy();
  });
});
