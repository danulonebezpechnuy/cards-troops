import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SquadStatsComponent } from './squad-stats/squad-stats.component';
import { SquadSelectorComponent } from './squad-selector/squad-selector.component';
import { FightResultsComponent } from './fight-results/fight-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SquadStatsComponent,
    SquadSelectorComponent,
    FightResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
