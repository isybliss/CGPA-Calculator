import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BackendConnService } from '../backend-conn/backend-conn.service';
import Course from 'src/interfaces/course.model';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  addCourseFormOpen: boolean;
  activeroute!: string;
  activeCourseSn!: number;
  private editMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  courses: Course[] = [
    {
      sn: 1,
      courseCode: 'CSC 101',
      courseTitle: 'Introduction to Computer Science',
      courseUnit: 3,
      grade: 'A',
    },
    {
      sn: 2,
      courseCode: 'CSC 102',
      courseTitle: 'Introduction to Computer Programming',
      courseUnit: 3,
      grade: 'A',
    },
  ];
  $courses: any;
  editMode$ = this.editMode.asObservable();

  constructor(
    @Inject(BackendConnService) private backendConnService: BackendConnService
  ) {
    this.addCourseFormOpen = false;
    // this.$courses = backendConnService.courses.subscribe((courses) => {
    //   this.courses = courses;
    // });
  }

  toggleAddCourseForm(courseSn: number = -1): void {
    courseSn > -1
      ? // deepcode ignore OverwriteAssignment: I don't know what this means
        (this.activeCourseSn = courseSn)
      : (this.activeCourseSn = -1);
    this.addCourseFormOpen = !this.addCourseFormOpen;
  }

  toggleEditMode(): void {
    this.editMode.next(!this.editMode.value);
  }
}
