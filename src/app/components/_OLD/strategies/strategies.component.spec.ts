import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategiesComponent } from './strategies.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

describe('StrategiesComponent', () => {
  let component: StrategiesComponent;
  let fixture: ComponentFixture<StrategiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StrategiesComponent],
      imports: [MDBBootstrapModule, HttpClientModule, MatDialogModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
