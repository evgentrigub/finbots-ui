import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotStatsDialogComponent } from './bot-stats-dialog.component';
import { WidgetsComponent } from 'src/app/widgets/widgets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatCardModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('BotStatsDialogComponent', () => {
  let component: BotStatsDialogComponent;
  let fixture: ComponentFixture<BotStatsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BotStatsDialogComponent, WidgetsComponent],
      imports: [BrowserAnimationsModule, HttpClientModule, MatDialogModule, MatCardModule],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotStatsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
