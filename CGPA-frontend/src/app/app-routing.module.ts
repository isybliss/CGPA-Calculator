import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { SettingsComponent } from './dashboard/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    data: { title: 'Login' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',
    data: { title: 'Register' },
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    data: { title: 'Dashboard' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
