import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardComponent } from './main-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatCardModule,
  MatFormFieldModule,
  MatStepperModule,
  MatRadioModule,
  MatSelectModule,
  MatGridListModule,
  MatSliderModule,
  MatSnackBarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatMenuModule,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetsComponent } from '../widgets/widgets.component';

describe('MainDashboardComponent', () => {
  let component: MainDashboardComponent;
  let fixture: ComponentFixture<MainDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MainDashboardComponent, WidgetsComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        MatCardModule,
        MatFormFieldModule,
        MatStepperModule,
        MatRadioModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatGridListModule,
        MatSliderModule,
        MatSnackBarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatMenuModule,
        MatDialogModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should compile', () => {
  //   expect(component).toBeTruthy();
  // });
});
