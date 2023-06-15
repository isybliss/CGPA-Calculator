import { Component, Inject } from '@angular/core';
import { AppStateService } from './services/app-state/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CGPA-Calculator-Frontend';
  appStateService!: AppStateService;
  constructor(@Inject(AppStateService) appStateService: AppStateService) {
    this.appStateService = appStateService;
  }
}
