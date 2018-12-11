import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StandupConfigComponent } from './components/standup-config/standup-config.component';
import { StandupTimerComponent } from './components/standup-timer/standup-timer.component';
import { PlanningpokerComponent } from './components/planningpoker/planningpoker.component';

import 'hammerjs';


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
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
