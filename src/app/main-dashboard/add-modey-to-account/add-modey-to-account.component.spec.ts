import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModeyToAccountComponent } from './add-modey-to-account.component';

describe('AddModeyToAccountComponent', () => {
  let component: AddModeyToAccountComponent;
  let fixture: ComponentFixture<AddModeyToAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddModeyToAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModeyToAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
