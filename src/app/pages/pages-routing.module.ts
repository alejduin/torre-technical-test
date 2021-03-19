import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { OpportunityComponent } from './opportunity/opportunity.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' },
 
  { path: 'home', component: HomeComponent },
  { path: 'profile-list', component: ProfileListComponent },
  { path: 'opportunity', component: OpportunityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
