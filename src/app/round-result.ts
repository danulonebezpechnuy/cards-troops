import { SquadFightResult } from "./squad-fight-result";
import { Squad } from "./squad";

export class RoundResult {

    leftSquadFightResult?: SquadFightResult;
    rightSquadFightResult?: SquadFightResult;

    leftSquadAftermath?: Squad;
    rightSquadAftermath?: Squad;

    isDecisive: boolean;

    constructor( leftSquad: Squad, rightSquad: Squad ) {
        this.leftSquadAftermath = leftSquad;
        this.rightSquadAftermath = rightSquad;
        this.isDecisive = false;
    }

};