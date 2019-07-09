import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotStatsDialogComponent } from './bot-stats-dialog.component';

describe('BotStatsDialogComponent', () => {
  let component: BotStatsDialogComponent;
  let fixture: ComponentFixture<BotStatsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BotStatsDialogComponent],
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
