import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbatchComponent } from './editbatch.component';

describe('EditbatchComponent', () => {
  let component: EditbatchComponent;
  let fixture: ComponentFixture<EditbatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
