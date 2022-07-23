import { Injectable } from '@angular/core';
import { Pair } from '../pair';
import { Squad } from '../squad';
import { SquadService } from '../squad.service';
import { CloseFight } from './close-fight';
import { FierceFight } from './fierce-fight';
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
    var fight: Fight = new CloseFight(this.copySquadsPair(squads));

    while(fightResults.length < 10 && fight.isResolvable()) {
      fightResults.push(fight.getResults());
      fight = this.defineNextFight(fight);
    }
    return {
      rounds: fightResults,
      outcome: fight.getOutcome()
    };
  }

  private copySquadsPair(squads: Pair<Squad>): Pair<Squad> {
    return {
      left: this.squadService.deepCopy(squads.left),
      right: this.squadService.deepCopy(squads.right)
    }
  }

  private defineNextFight(fight: Fight): Fight {
    if(!fight.isAnyHealthLoses() && fight instanceof CloseFight) {
      return new FierceFight(fight.getSquads());
    }
    return fight;
  }

}
