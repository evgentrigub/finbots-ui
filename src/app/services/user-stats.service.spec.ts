import { TestBed, inject } from '@angular/core/testing';

import { UserStatsService } from './user-stats.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserStatsService],
      imports: [HttpClientModule],
    });
  });

  it('should be created', inject([UserStatsService], (service: UserStatsService) => {
    expect(service).toBeTruthy();
  }));
});
