import { Pair } from "../pair";
import { Squad } from "../squad";
import { SquadProperty } from "../squad-property";
import { FightResult } from "./fight-result";

export abstract class Fight {

    constructor(
        protected squads: Pair<Squad>
    ) {}

    isResolvable(): boolean {
        return this.isInLine(this.squads.left)
            && this.isInLine(this.squads.right);
    }

    private isInLine(squad: Squad): boolean {
        return squad.health > 0 && squad.will > 0;
    }

    getResults(): Pair<FightResult> {
        var fightResults = {
            left: this.withDamageModifiers(this.squads.left, this.squads.right),
            right: this.withDamageModifiers(this.squads.right, this.squads.left)
        };
        fightResults.left.loses = this.applySquadLoses(this.squads.left, fightResults.right);
        fightResults.right.loses = this.applySquadLoses(this.squads.right, fightResults.left);
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
        if(squad.weaponQuality == opponent.equipmentQuality) {
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
        if(squad.fatigue >= squad.maxFatigue) {
            debufs.push({name: "fatigue", value: squadDamage - 1});
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
            if(squad.fatigue < squad.maxFatigue) {
            loses.push({name: "fatigue", value: 1});
            squad.fatigue += 1;
            if(squad.fatigue === squad.maxFatigue) {
                loses.push({name: "will (fatigue)", value: -1});
                squad.will -= 1;
            }
            }
            return loses;
        }
        if(squad.health === squad.maxHealth) {
            loses.push({name: "will (health)", value: -1});
            squad.will -= 1;
        }
        loses.push({name: "health", value: -1});
        squad.health -= 1;
        if(opponentDamage > 1 && squad.cohesion > 0) {
            var cohesionDamage = opponentDamage - 1;
            loses.push({name: "cohesion", value: -cohesionDamage});
            squad.cohesion -= cohesionDamage;
            squad.cohesion = squad.cohesion < 0 ? 0 : squad.cohesion;
            if(squad.cohesion <= 0) {
            loses.push({name: "will (cohesion)", value: -1});
            squad.will -= 1;
            }
        }
        return loses;
    }

    private sumModifiers(modifiers: SquadProperty<number>[]): number {
        return modifiers.reduce((sum, modifier) => sum + modifier.value, 0);
    }

    next(): Fight {
        return this;
    }

    getOutcome(): string {
        if(this.isInLine(this.squads.left) && !this.isInLine(this.squads.right)) {
            return 'LEFT SQUAD WON';
        }
        if(this.isInLine(this.squads.right) && !this.isInLine(this.squads.left)) {
            return 'RIGHT SQUAD WON';
        }
        return 'DRAW';
    }

}