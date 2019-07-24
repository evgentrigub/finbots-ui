import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBotComponent } from './create-bot.component';
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
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateBotComponent', () => {
  let component: CreateBotComponent;
  let fixture: ComponentFixture<CreateBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBotComponent],
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
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
