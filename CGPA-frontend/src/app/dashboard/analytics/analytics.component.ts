import { Component, HostBinding } from '@angular/core';

@Component({
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent {
  @HostBinding('class.analytics') hostClass = true;
  componentId = 'analytics';

  @HostBinding('class.analytics2') hostClass2 = true;
  componentId2 = 'analytics2';
}
