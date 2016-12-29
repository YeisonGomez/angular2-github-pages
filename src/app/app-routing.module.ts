import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeCardComponent } from './me-card/me-card.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'skills',  component: HomeComponent },
  { path: 'projects',  component: AboutComponent }
 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}