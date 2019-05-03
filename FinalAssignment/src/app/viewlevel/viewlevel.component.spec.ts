import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlevelComponent } from './viewlevel.component';

describe('ViewlevelComponent', () => {
  let component: ViewlevelComponent;
  let fixture: ComponentFixture<ViewlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
