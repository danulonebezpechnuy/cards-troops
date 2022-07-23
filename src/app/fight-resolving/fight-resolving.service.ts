import { Injectable } from '@angular/core';
import { Pair } from '../pair';
import { Squad } from '../squad';
import { SquadProperty } from '../squad-property';
import { SquadService } from '../squad.service';
import { CloseFight } from './close-fight';
import { Fight } from './fight';
import { FightResult } from './fight-result';
import { ResolvedFight } from './resolved-fight';

@Injectable({
  providedIn: 'root'
})
export class FightResolvingService {

  constructor(
    private squadService: SquadService
  ) {}

  resolveFight(squads: Pair<Squad>): ResolvedFight {
    var fightResults: Pair<FightResult>[] = [];
    var fight: Fight = new CloseFight({
      left: this.squadService.deepCopy(squads.left),
      right: this.squadService.deepCopy(squads.right)
  });

    while(fightResults.length < 10 && fight.isResolvable()) {
      fightResults.push(fight.getResults());
      fight = fight.next();
    }
    return {
      rounds: fightResults,
      outcome: fight.getOutcome()
    };
  }

}
