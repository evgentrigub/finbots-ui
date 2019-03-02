import { TestBed, inject } from '@angular/core/testing';

import { TickersService } from './tickers.service';

describe('TickersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TickersService]
    });
  });

  it('should be created', inject([TickersService], (service: TickersService) => {
    expect(service).toBeTruthy();
  }));
});
