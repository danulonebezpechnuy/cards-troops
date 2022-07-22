import { Component, ViewChild } from '@angular/core';
import { Pair } from './pair';

import { Squad } from './squad';
import { SquadService } from './squad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedSquads = {} as Pair<Squad>;

  constructor(
    private squadService: SquadService
  ) {}

  onLeftSelected(squad: Squad) {
    this.squadService.getSquad(squad.id).subscribe(squad => this.selectedSquads.left = squad);
  }

  onRightSelected(squad: Squad) {
    this.squadService.getSquad(squad.id).subscribe(squad => this.selectedSquads.right = squad);
  }

}
