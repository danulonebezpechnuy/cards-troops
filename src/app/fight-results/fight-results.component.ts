import { Component, Input, OnInit } from '@angular/core';
import { FightResolvingService } from '../fight-resolving/fight-resolving.service';
import { ResolvedFight } from '../fight-resolving/resolved-fight';
import { Pair } from '../pair';
import { Squad } from '../squad';

@Component({
  selector: 'app-fight-results',
  templateUrl: './fight-results.component.html',
  styleUrls: ['./fight-results.component.css']
})
export class FightResultsComponent implements OnInit {

  @Input() selectedSquads?: Pair<Squad>;
  resolvedFight?: ResolvedFight;

  constructor(
    private fightResolvingService: FightResolvingService
  ) {}

  ngOnInit(): void {}

  calculate(): void {
    if(this.selectedSquads && this.selectedSquads.left && this.selectedSquads.right) {
      this.resolvedFight = this.fightResolvingService.resolveFight(this.selectedSquads);
      console.log(this.resolvedFight);
    }
  }

}
