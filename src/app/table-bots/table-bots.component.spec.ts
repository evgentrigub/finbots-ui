import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBotsComponent } from './table-bots.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatTableModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatDialogModule,
} from '@angular/material';
import { BotNameComponent } from './bot-name/bot-name.component';

describe('TableBotsComponent', () => {
  let component: TableBotsComponent;
  let fixture: ComponentFixture<TableBotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableBotsComponent, BotNameComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSnackBarModule,
        MatDialogModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
