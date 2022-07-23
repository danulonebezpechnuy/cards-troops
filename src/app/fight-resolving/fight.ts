import { Pair } from "../pair";
import { Squad } from "../squad";
import { SquadProperty } from "../squad-property";
import { FightResult } from "./fight-result";

export abstract class Fight {

    protected fightResults?: Pair<FightResult>

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
        this.fightResults = {
            left: this.withDamageModifiers(this.squads.left, this.squads.right),
            right: this.withDamageModifiers(this.squads.right, this.squads.left)
        };
        this.fightResults.left.loses = this.applySquadLoses(this.squads.left, this.fightResults.right);
        this.fightResults.right.loses = this.applySquadLoses(this.squads.right, this.fightResults.left);
        return this.fightResults;
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
        debufs.push(this.getFatigueDebuf(squad, squadDamage));
        debufs.push(this.getShieldsDebuf(opponent));
        return debufs.filter(debuf => debuf.name !== undefined );
    }

    protected getFatigueDebuf(squad: Squad, squadDamage: number): SquadProperty<number> {
        return squad.fatigue >= squad.maxFatigue && squadDamage > 1 ? {name: "fatigue", value: squadDamage - 1} : {} as SquadProperty<number>;
    }

    protected getShieldsDebuf(opponent: Squad): SquadProperty<number> {
        return opponent.totalShields > 0 ? {name: "shields", value: opponent.totalShields} : {} as SquadProperty<number>;
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

    isAnyHealthLoses(): boolean {
        return this.fightResults!.left.loses!.some(loss => loss.name === 'health')
            || this.fightResults!.right.loses!.some(loss => loss.name === 'health');
    }

    getSquads(): Pair<Squad> {
        return this.squads;
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
