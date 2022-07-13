import { Injectable } from '@angular/core';

import { Squad } from './squad';
import { RoundResult } from './round-result';
import { SquadFightResult } from './squad-fight-result';

@Injectable({
  providedIn: 'root'
})
export class FightCalculationService {

  constructor(  ) {}

  calculateResults( leftSquad: Squad, rightSquad: Squad ): RoundResult[] {
    var results: RoundResult[] = [];
    var lastResult: RoundResult = new RoundResult( leftSquad, rightSquad );

    while( !( lastResult && lastResult.isDecisive ) ) {
      results.push( this.calculateNextResult( lastResult ) );
    }
    return results;
  }

  private calculateNextResult( lastResult: RoundResult ): RoundResult {
    var result = {} as RoundResult;
    result.leftSquadFightResult = this.calculateSquadFightResult( lastResult.leftSquadAftermath!, lastResult.rightSquadAftermath! );
    result.rightSquadFightResult = this.calculateSquadFightResult( lastResult.rightSquadAftermath!, lastResult.leftSquadAftermath! );

    return result;
  }

  private calculateSquadFightResult( squad: Squad, opponent: Squad ): SquadFightResult {
    var fightResult = {} as SquadFightResult;
    fightResult.damageBufs = this.calculateDamageBufs( squad, opponent );
    fightResult.loses = this.calculateLoses( squad, opponent );
    fightResult.effects = this.getEffects( squad );
    return fightResult;
  }

  private calculateDamageBufs( squad: Squad, opponent: Squad ): string[] {
    var damageBufs = [];
    if( squad.equipmentValue > opponent.equipmentValue ) {
      damageBufs.push( 'equipment' );
    }
    if( squad.cohesion > opponent.cohesion ) {
      damageBufs.push( 'cohesion' );
    }
    if( squad.weaponColor === opponent.equipmentColor ) {
      damageBufs.push( 'weapon effective' );
    }
    if( squad.weaponInitiative > opponent.weaponInitiative ) {
      damageBufs.push( 'initiative' );
    }
    if( squad.expirience > opponent.expirience ) {
      damageBufs.push( 'expirience' );
    }
    return damageBufs;
  }

  private calculateDamageDebufs( squad: Squad, opponent: Squad ): string[] {
    var damageDebufs = [];
    if( squad.fatigue >= squad.maxFatigue ) {
      damageDebufs.push( 'fatigue' );
    }
    for( var i = 0; i < opponent.totalShields; i++ ) {
      damageDebufs.push( 'shield' );
    }
    return damageDebufs;
  }

  private calculateLoses( squad: Squad, opponent: Squad ): string[] {
    return [];
  }

  private getEffects( squad: Squad ): string[] {
    return [];
  }

}
