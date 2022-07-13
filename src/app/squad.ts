export interface Squad {
    /* colors:
        bronze - '#CD7F32'
        silver - '#C0C0C0'
        golden - '#FFD700'
    */
    name: string;

    equipmentValue: number;
    equipmentColor: string;

    weaponColor: string;
    weaponInitiative: number;
    isShieldbreaker: boolean;

    missileWeaponColor: string;
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
    shieldsColor: string;

};