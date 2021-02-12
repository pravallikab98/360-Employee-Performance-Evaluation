import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SurveyComponent} from './survey/survey.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {VisualizationComponent} from './visualization/visualization.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'visualization', component: VisualizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
