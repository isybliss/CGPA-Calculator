import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { AppStateService } from 'src/app/services/app-state/app-state.service';
import Course from 'src/interfaces/course.model';

@Component({
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  @HostBinding('class.overview') hostClass = true;
  componentId = 'overview';
  courses!: Course[];
  editMode: boolean = false;

  noCoursePresent = false;
  constructor(
    private renderer: Renderer2,
    @Inject(AppStateService) private appStateService: AppStateService,
    private changeDectectorRef: ChangeDetectorRef
  ) {
    this.courses = this.appStateService.courses;
  }

  prefetchImage(imageUrl: string) {
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'prefetch');
    this.renderer.setAttribute(link, 'href', imageUrl);
    this.renderer.appendChild(document.head, link);
  }

  ngOnInit() {
    this.prefetchImage('../../../assets/images/add-course-icon.svg');
    const $editMode = this.appStateService.editMode$.subscribe((editMode) => {
      this.editMode = editMode;
      this.changeDectectorRef.detectChanges();
    });
  }
  openAddCourseForm() {
    this.appStateService.toggleAddCourseForm();
  }
  toggleEditMode() {
    this.appStateService.toggleEditMode();
  }
}
