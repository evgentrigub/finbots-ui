import { TestBed, inject } from '@angular/core/testing';

import { TradingBotsService } from './trading-bots.service';
import { HttpClientModule } from '@angular/common/http';

describe('TradibgBotsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradingBotsService],
      imports: [HttpClientModule],
    });
  });

  it('should be created', inject([TradingBotsService], (service: TradingBotsService) => {
    expect(service).toBeTruthy();
  }));
});
