import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantHomeComponent } from './applicant-home.component';

describe('ApplicantHomeComponent', () => {
  let component: ApplicantHomeComponent;
  let fixture: ComponentFixture<ApplicantHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
