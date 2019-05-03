import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditapplicantComponent } from './editapplicant.component';

describe('EditapplicantComponent', () => {
  let component: EditapplicantComponent;
  let fixture: ComponentFixture<EditapplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditapplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditapplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
