import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBotsComponent } from './table-bots.component';

describe('TableBotsComponent', () => {
  let component: TableBotsComponent;
  let fixture: ComponentFixture<TableBotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBotsComponent ]
    })
    .compileComponents();
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
