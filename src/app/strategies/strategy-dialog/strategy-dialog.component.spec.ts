import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyDialogComponent } from './strategy-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatCardModule,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('StrategyDialogComponent', () => {
  let component: StrategyDialogComponent;
  let fixture: ComponentFixture<StrategyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StrategyDialogComponent],
      imports: [BrowserAnimationsModule, HttpClientModule, MatDialogModule, MatCardModule],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
