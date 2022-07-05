import { Component, Input, OnInit } from '@angular/core';

import { Squad } from '../squad';

@Component({
  selector: 'app-squad-stats',
  templateUrl: './squad-stats.component.html',
  styleUrls: ['./squad-stats.component.css']
})
export class SquadStatsComponent implements OnInit {

  @Input() squad?: Squad;

  constructor() { }

  ngOnInit(): void {
  }

}
