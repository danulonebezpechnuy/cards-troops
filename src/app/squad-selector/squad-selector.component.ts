import { Component, OnInit } from '@angular/core';

import { Squad } from '../squad';
import { SQUADS } from '../mock-squads';

@Component({
  selector: 'app-squad-selector',
  templateUrl: './squad-selector.component.html',
  styleUrls: ['./squad-selector.component.css']
})
export class SquadSelectorComponent implements OnInit {

  squads: Squad[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getSquads();
  }

  getSquads() {
    this.squads = SQUADS;
  }

}
