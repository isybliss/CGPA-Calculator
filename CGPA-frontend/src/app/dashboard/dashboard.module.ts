import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './settings/settings.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CourseTableComponent } from './course-table/course-table.component';

@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    SettingsComponent,
    AnalyticsComponent,
    CourseTableComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: 'overview',
            component: OverviewComponent,
          },
          {
            path: 'settings',
            component: SettingsComponent,
          },
          {
            path: 'analytics',
            component: AnalyticsComponent,
          },
          {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full',
          },
        ],
      },
    ]),
  ],
})
export class DashboardModule {}
