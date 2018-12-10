import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlanningpokerComponent } from './components/planningpoker/planningpoker.component';
import { StandupTimerComponent } from './components/standup-timer/standup-timer.component';
import { StandupConfigComponent } from './components/standup-config/standup-config.component';

const routes: Routes = [
  {path:'home' , component: HomeComponent},
  {path: 'pPoker', component: PlanningpokerComponent},
  {path: 'standUpT', component: StandupTimerComponent},
  {path: 'standUpC', component: StandupConfigComponent},
  {path:'', component: HomeComponent},
  {path:'**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
