import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StandupConfigComponent } from './standup-config/standup-config.component';
import { StandupTimerComponent } from './standup-timer/standup-timer.component';
import { PlanningpokerComponent } from './planningpoker/planningpoker.component';

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
