import { Pair } from "../pair";
import { FightResult } from "./fight-result";

export interface ResolvedFight {

    rounds: Pair<FightResult>[];
    outcome: string;

}