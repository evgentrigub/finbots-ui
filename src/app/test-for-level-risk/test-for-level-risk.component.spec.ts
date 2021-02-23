import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForLevelRiskComponent } from './test-for-level-risk.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('TestForLevelRiskComponent', () => {
  let component: TestForLevelRiskComponent;
  let fixture: ComponentFixture<TestForLevelRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestForLevelRiskComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        RouterTestingModule,
        MatCardModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatSnackBarModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestForLevelRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
