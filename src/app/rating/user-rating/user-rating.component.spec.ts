import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRatingComponent } from './user-rating.component';
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

describe('UserRatingComponent', () => {
  let component: UserRatingComponent;
  let fixture: ComponentFixture<UserRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserRatingComponent],
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
    fixture = TestBed.createComponent(UserRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
