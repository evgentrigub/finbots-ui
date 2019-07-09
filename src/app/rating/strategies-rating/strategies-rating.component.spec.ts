import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategiesRatingComponent } from './strategies-rating.component';

describe('StrategiesRatingComponent', () => {
  let component: StrategiesRatingComponent;
  let fixture: ComponentFixture<StrategiesRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StrategiesRatingComponent],
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
