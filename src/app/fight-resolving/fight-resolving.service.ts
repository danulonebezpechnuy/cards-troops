import { Injectable } from '@angular/core';
import { Pair } from '../pair';
import { Squad } from '../squad';
import { SquadProperty } from '../squad-property';
import { SquadService } from '../squad.service';
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
    var rounds: Pair<FightResult>[] = [];
    var fightingSquads = {} as Pair<Squad>;
    this.squadService.getSquad(squads.left.id).subscribe(squad => fightingSquads.left = squad);
    this.squadService.getSquad(squads.right.id).subscribe(squad => fightingSquads.right = squad);

    while(rounds.length < 10 && this.canFight(fightingSquads)) {
      rounds.push(this.resolveNextRound(fightingSquads));
    }
    return {
      rounds: rounds,
      outcome: this.getOutcome(fightingSquads)
    };
  }

  private canFight(squads: Pair<Squad>): boolean {
    return this.isInLine(squads.left) && this.isInLine(squads.right);
  }

  private isInLine(squad: Squad): boolean {
    return squad.health > 0 && squad.will > 0;
  }

  private resolveNextRound(squads: Pair<Squad>): Pair<FightResult> {
    var fightResults = {
      left: this.withDamageModifiers(squads.left, squads.right),
      right: this.withDamageModifiers(squads.right, squads.left)
    };
    fightResults.left.loses = this.applySquadLoses(squads.left, fightResults.right);
    fightResults.right.loses = this.applySquadLoses(squads.right, fightResults.left);
    return fightResults;
  }

  private withDamageModifiers(squad: Squad, opponent: Squad): FightResult {
    var damageBufs = this.getDamageBufs(squad, opponent);
    var damageDebufs = this.getDamageDebufs(squad, damageBufs.length, opponent);
    return {
      damageBufs: damageBufs,
      damageDebufs: damageDebufs
    };
  }

  private getDamageBufs(squad: Squad, opponent: Squad): SquadProperty<number>[] {
    var bufs: SquadProperty<number>[] = [];
    if(squad.equipmentValue > opponent.equipmentValue) {
      bufs.push({name: "equipment", value: 1});
    }
    if(squad.cohesion > opponent.cohesion) {
      bufs.push({name: "cohesion", value: 1});
    }
    if(squad.weaponQuality == squad.equipmentQuality) {
      bufs.push({name: "weapon efficiency", value: 1});
    }
    if(squad.weaponInitiative > opponent.weaponInitiative) {
      bufs.push({name: "weapon initiative", value: 1});
    }
    if(squad.expirience > opponent.expirience) {
      bufs.push({name: "expirience", value: 1});
    }
    return bufs;
  }

  private getDamageDebufs(squad: Squad, squadDamage: number, opponent: Squad): SquadProperty<number>[] {
    var debufs: SquadProperty<number>[] = [];
    if(squad.fatigue == squad.maxFatigue) {
      debufs.push({name: "fatigue", value: squadDamage});
    }
    if(opponent.totalShields > 0) {
      debufs.push({name: "shields", value: opponent.totalShields});
    }
    return debufs;
  }

  private applySquadLoses(squad: Squad, opponentDamageModifiers: FightResult): SquadProperty<number>[] {
    var loses: SquadProperty<number>[] = [];
    var opponentDamage = this.sumModifiers(opponentDamageModifiers.damageBufs!) - this.sumModifiers(opponentDamageModifiers.damageDebufs!)
    if(opponentDamage < 1) {
      loses.push({name: "fatigue", value: 1});
      squad.fatigue += 1;
      if(squad.fatigue === squad.maxFatigue) {
        loses.push({name: "will", value: -1});
        squad.will -= 1;
      }
      return loses;
    }
    if(squad.health === squad.maxHealth) {
      loses.push({name: "will", value: -1});
      squad.will -= 1;
    }
    loses.push({name: "health", value: -1});
    squad.health -= 1;
    if(opponentDamage > 1) {
      var cohesionDamage = opponentDamage - 1;
      if(squad.cohesion > 0 && squad.cohesion - cohesionDamage <=0) {
        loses.push({name: "will", value: -1});
        squad.will -= 1;
      }
      loses.push({name: "cohesion", value: -cohesionDamage});
      squad.cohesion -= cohesionDamage;
    }
    return loses;
  }

  private sumModifiers(modifiers: SquadProperty<number>[]): number {
    return modifiers.reduce((sum, modifier) => sum + modifier.value, 0);
  }

  private getOutcome(squads: Pair<Squad>): string {
    if(this.isInLine(squads.left) && !this.isInLine(squads.right)) {
      return 'LEFT SQUAD WON';
    }
    if(this.isInLine(squads.right) && !this.isInLine(squads.left)) {
      return 'RIGHT SQUAD WON';
    }
    return 'DRAW';
  }

}
