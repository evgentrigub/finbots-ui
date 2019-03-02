import { TestBed, inject } from '@angular/core/testing';

import { FinancialInstrumentsService } from './financial-instruments.service';

describe('FinancialInstrumentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinancialInstrumentsService]
    });
  });

  it('should be created', inject([FinancialInstrumentsService], (service: FinancialInstrumentsService) => {
    expect(service).toBeTruthy();
  }));
});
