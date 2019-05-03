import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformActivityComponent } from './perform-activity.component';

describe('PerformActivityComponent', () => {
  let component: PerformActivityComponent;
  let fixture: ComponentFixture<PerformActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
