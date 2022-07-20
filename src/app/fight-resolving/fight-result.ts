import { SquadProperty } from "../squad-property";

export class FightResult {

    private damageBufs?: SquadProperty<Number>[];
    private damageDebufs?: SquadProperty<Number>[];
    private loses?: SquadProperty<Number>[];
    private effects?: string[];

}