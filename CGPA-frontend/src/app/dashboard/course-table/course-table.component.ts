import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AppStateService } from 'src/app/services/app-state/app-state.service';
import { BackendConnService } from 'src/app/services/backend-conn/backend-conn.service';
import Course from 'src/interfaces/course.model';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseTableComponent implements OnInit {
  editMode: boolean = false;
  $editMode: Subscription;
  constructor(
    private appStateService: AppStateService,
    private changeDectectorRef: ChangeDetectorRef,
    private backendConnService: BackendConnService
  ) {
    this.appStateService = appStateService;
    this.changeDectectorRef = changeDectectorRef;
    this.$editMode = new Subscription();
  }
  @Input() courses: Course[] = [
    {
      sn: 1,
      courseCode: 'CSC 101',
      courseTitle: 'Introduction to Computer Science',
      courseUnit: 3,
      grade: 'A',
    },
  ];
  ngOnInit(): void {
    this.$editMode = this.appStateService.editMode$.subscribe((editMode) => {
      this.editMode = editMode;
      this.changeDectectorRef.detectChanges();
    });
  }

  editCourse(courseSn: number) {
    this.appStateService.toggleEditMode();
    this.appStateService.toggleAddCourseForm(courseSn);
  }
}
