import { SquadProperty } from "../squad-property";

export class FightResult {

    damageBufs?: SquadProperty<number>[];
    damageDebufs?: SquadProperty<number>[];
    loses?: SquadProperty<number>[];

}