import { Quality } from './quality';
import { Squad } from './squad';

export const SQUADS: Squad[] = [
    {
        id: 1,

        name: 'militia',

        equipmentValue: 10,
        equipmentQuality: Quality.BRONZE,

        weaponQuality: Quality.SILVER,
        weaponInitiative: 3,
        isShieldbreaker: false,

        missileWeaponQuality: {} as Quality,
        missileWeaponRange: 0,

        cohesion: 1,
        maxCohesion: 1,
        expirience: 0,
        health: 4,
        maxHealth: 4,
        fatigue: 0,
        maxFatigue: 4,
        will: 2,
        maxWill: 2,

        totalShields: 2,
        commonShields: 1,
        missileBlockShields: 1,
        shieldsQuality: Quality.BRONZE
    },
    {
        id: 2,

        name: 'mercenaries',

        equipmentValue: 17,
        equipmentQuality: Quality.SILVER,

        weaponQuality: Quality.SILVER,
        weaponInitiative: 3,
        isShieldbreaker: false,

        missileWeaponQuality: {} as Quality,
        missileWeaponRange: 0,

        cohesion: 2,
        maxCohesion: 2,
        expirience: 1,
        health: 4,
        maxHealth: 4,
        fatigue: 0,
        maxFatigue: 5,
        will: 2,
        maxWill: 2,

        totalShields: 2,
        commonShields: 1,
        missileBlockShields: 1,
        shieldsQuality: Quality.SILVER
    },
    {
        id: 3,

        name: 'nobles',

        equipmentValue: 27,
        equipmentQuality: Quality.GOLDEN,

        weaponQuality: Quality.GOLDEN,
        weaponInitiative: 2,
        isShieldbreaker: false,

        missileWeaponQuality: {} as Quality,
        missileWeaponRange: 0,

        cohesion: 3,
        maxCohesion: 3,
        expirience: 2,
        health: 4,
        maxHealth: 4,
        fatigue: 0,
        maxFatigue: 4,
        will: 3,
        maxWill: 3,

        totalShields: 1,
        commonShields: 1,
        missileBlockShields: 0,
        shieldsQuality: Quality.GOLDEN
    }
];