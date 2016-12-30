import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', redirectTo: '/skills', pathMatch: 'full' },
  { path: 'skills',  component: SkillsComponent },
  { path: 'projects',  component: ProjectsComponent },
  { path: '**', redirectTo: '/skills'}
 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}