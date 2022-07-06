import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Squad } from '../squad';
import { SQUADS } from '../mock-squads';

@Component({
  selector: 'app-squad-selector',
  templateUrl: './squad-selector.component.html',
  styleUrls: ['./squad-selector.component.css']
})
export class SquadSelectorComponent implements OnInit {

  @Output() selectedSquad = new EventEmitter<Squad>();
  squads: Squad[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getSquads();
  }

  getSquads() {
    this.squads = SQUADS;
  }

  select( squad: Squad ) {
    console.log(`squad selected ${squad.name}`);
    this.selectedSquad.emit( squad );
  }

}
