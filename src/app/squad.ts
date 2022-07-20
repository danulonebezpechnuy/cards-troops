import { Quality } from "./quality";

export interface Squad {
    /* colors:
        bronze - '#CD7F32'
        silver - '#C0C0C0'
        golden - '#FFD700'
    */
    id: number;

    name: string;

    equipmentValue: number;
    equipmentQuality: Quality;

    weaponQuality: Quality;
    weaponInitiative: number;
    isShieldbreaker: boolean;

    missileWeaponQuality: Quality;
    missileWeaponRange: number;

    cohesion: number;
    maxCohesion: number;
    expirience: number;
    health: number;
    maxHealth: number;
    fatigue: number;
    maxFatigue: number;
    will: number;
    maxWill: number;

    totalShields: number;
    commonShields: number;
    missileBlockShields: number;
    shieldsQuality: Quality;

};