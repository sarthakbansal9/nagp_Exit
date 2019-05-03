import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantRecordListComponent } from './applicant-record-list.component';

describe('ApplicantRecordListComponent', () => {
  let component: ApplicantRecordListComponent;
  let fixture: ComponentFixture<ApplicantRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
