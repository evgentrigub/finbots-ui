import { TestBed, inject } from '@angular/core/testing';

import { StrategyService } from './strategy.service';
import {
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('StrategyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StrategyService],
      imports: [HttpClientModule],
    });
  });

  it('should be created', inject([StrategyService], (service: StrategyService) => {
    expect(service).toBeTruthy();
  }));
});
