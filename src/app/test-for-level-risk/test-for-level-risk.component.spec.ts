import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForLevelRiskComponent } from './test-for-level-risk.component';

describe('TestForLevelRiskComponent', () => {
  let component: TestForLevelRiskComponent;
  let fixture: ComponentFixture<TestForLevelRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestForLevelRiskComponent],
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
