import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StandupConfigComponent } from './components/standup-config/standup-config.component';
import { StandupTimerComponent } from './components/standup-timer/standup-timer.component';
import { PlanningpokerComponent } from './components/planningpoker/planningpoker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StandupConfigComponent,
    StandupTimerComponent,
    PlanningpokerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
