import { TestBed } from '@angular/core/testing';

import { HomeStatisticsServiceService } from './home-statistics-service.service';

describe('HomeStatisticsServiceService', () => {
  let service: HomeStatisticsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeStatisticsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
