import { Pair } from "../pair";
import { Squad } from "../squad";
import { SquadProperty } from "../squad-property";
import { Fight } from "./fight";

export class FierceFight extends Fight {

    constructor(squads: Pair<Squad>) {
        super(squads);
    }

    protected override getShieldsDebuf(opponent: Squad): SquadProperty<number> {
        return {} as SquadProperty<number>;
    }

}