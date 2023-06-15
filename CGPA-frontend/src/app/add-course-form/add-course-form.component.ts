import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppStateService } from '../services/app-state/app-state.service';

@Component({
  selector: 'app-add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-form.component.css'],
})
export class AddCourseFormComponent implements OnInit {
  constructor(
    @Inject(AppStateService) private appStateService: AppStateService
  ) {}
  addCourseForm = new FormGroup({
    courseTitle: new FormControl(),
    courseCode: new FormControl(),
    courseUnit: new FormControl('1'),
    grade: new FormControl('A'),
  });

  ngOnInit(): void {
    this.appStateService.activeCourseSn > -1 ? this.editCourse() : null;
  }

  editCourse() {
    const course = this.appStateService.courses.find(
      (course) => course.sn === this.appStateService.activeCourseSn
    );
    this.addCourseForm.patchValue({
      courseTitle: course?.courseTitle,
      courseCode: course?.courseCode,
      courseUnit: course?.courseUnit.toString(),
      grade: course?.grade,
    });
  }

  onSubmit() {
    console.log(this.addCourseForm.value);
  }

  closeAddCourseForm() {
    this.appStateService.toggleAddCourseForm();
  }
}
