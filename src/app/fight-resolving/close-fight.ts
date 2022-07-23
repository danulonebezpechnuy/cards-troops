import { Pair } from "../pair";
import { Squad } from "../squad";
import { Fight } from "./fight";

export class CloseFight extends Fight {

    constructor(squads: Pair<Squad>) {
        super(squads);
    }

}