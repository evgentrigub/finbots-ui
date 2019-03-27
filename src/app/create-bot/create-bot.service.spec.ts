import { TestBed, inject } from '@angular/core/testing';

import { CreateBotService } from './create-bot.service';

describe('CreateBotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateBotService]
    });
  });

  it('should be created', inject([CreateBotService], (service: CreateBotService) => {
    expect(service).toBeTruthy();
  }));
});
