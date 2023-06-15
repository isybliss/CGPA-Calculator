import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseFormComponent } from './add-course-form.component';

describe('AddCourseFormComponent', () => {
  let component: AddCourseFormComponent;
  let fixture: ComponentFixture<AddCourseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCourseFormComponent]
    });
    fixture = TestBed.createComponent(AddCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
