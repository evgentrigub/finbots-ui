import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRatingComponent } from './user-rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

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
