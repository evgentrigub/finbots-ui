import { TestBed, inject } from '@angular/core/testing';

import { CreateBotService } from './create-bot.service';
import { HttpClientModule } from '@angular/common/http';

describe('CreateBotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateBotService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([CreateBotService], (service: CreateBotService) => {
    expect(service).toBeTruthy();
  }));
});
