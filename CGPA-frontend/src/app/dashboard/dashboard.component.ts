import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit, OnInit {
  firstSection!: HTMLElement | null;
  secondSection!: HTMLElement | null;
  gap: number = 0;
  faUser = faUser;

  overviewIsActive: boolean = true;
  settingsIsActive!: boolean;
  analyticsIsActive!: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.overviewIsActive = this.router.url.includes('overview');
    this.settingsIsActive = this.router.url.includes('settings');
    this.analyticsIsActive = this.router.url.includes('analytics');
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.overviewIsActive = this.router.url.includes('overview');
        this.settingsIsActive = this.router.url.includes('settings');
        this.analyticsIsActive = this.router.url.includes('analytics');
      }
    });
  }

  ngAfterViewInit() {
    this.firstSection = document.querySelector('.first-sec');
    this.secondSection = document.querySelector('.second-sec');
    if (this.firstSection && this.secondSection) {
      this.gap =
        window.innerHeight -
        (this.firstSection.clientHeight + this.secondSection.clientHeight) -
        48;
    }
    this.firstSection?.parentElement?.setAttribute(
      'style',
      'gap: ' + (this.gap > 50 ? this.gap + 'px' : '50px')
    );
  }
}
