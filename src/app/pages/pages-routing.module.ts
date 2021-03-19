import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' },
 
  { path: 'home', component: HomeComponent },
  { path: 'profile-list', component: ProfileListComponent },
  { path: 'opportunity-list', component: OpportunityListComponent },
  { path: 'profile/:user', component: ProfileComponent, pathMatch:'full' },
  { path: 'opportunity/:job', component: OpportunityComponent, pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
