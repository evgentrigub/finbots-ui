import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategiesRatingComponent } from './strategies-rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTableModule,
} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('StrategiesRatingComponent', () => {
  let component: StrategiesRatingComponent;
  let fixture: ComponentFixture<StrategiesRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StrategiesRatingComponent],
      imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        RouterTestingModule,
        HttpClientModule,
        MatTabsModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatTableModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategiesRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
