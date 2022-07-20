import { Injectable } from '@angular/core';
import { Pair } from '../pair';
import { Squad } from '../squad';
import { SquadService } from '../squad.service';
import { FightResult } from './fight-result';

@Injectable({
  providedIn: 'root'
})
export class FightResolvingService {

  constructor() {}

  fight(squads: Pair<Squad>): FightResult[] {
    var result: FightResult[] = [];
    while(result.length < 10 && this.canFight(squads)) {
      result.push(this.resolveNextRound(squads));
    }
    return result;
  }

  private canFight(squads: Pair<Squad>): boolean {
    return true;
  }

  private resolveNextRound(squads: Pair<Squad>): FightResult {
    return {} as FightResult;
  }

}
