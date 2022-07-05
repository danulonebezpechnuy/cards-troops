import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SquadStatsComponent } from './squad-stats/squad-stats.component';
import { SquadSelectorComponent } from './squad-selector/squad-selector.component';
import { FightResultsComponent } from './fight-results/fight-results.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SquadStatsComponent,
    SquadSelectorComponent,
    FightResultsComponent,
    ColorSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
