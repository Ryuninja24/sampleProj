/**
 * Created by ngabelloa on 9/26/2016.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroComponent }      from './components/hero/hero.component';
import { DashboardComponent }      from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
  {  path: 'heroes', component: HeroComponent },
  {  path: 'dashboard', component: DashboardComponent },
  {  path: '',  redirectTo: '/dashboard',  pathMatch: 'full' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

