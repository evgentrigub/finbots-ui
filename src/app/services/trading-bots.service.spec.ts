import { TestBed, inject } from '@angular/core/testing';

import { TradingBotsService } from './trading-bots.service';

describe('TradibgBotsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradingBotsService]
    });
  });

  it('should be created', inject([TradingBotsService], (service: TradingBotsService) => {
    expect(service).toBeTruthy();
  }));
});
