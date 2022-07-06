import { Squad } from './squad';

export const SQUADS: Squad[] = [
    {
        name: 'militia',

        equipmentValue: 10,
        equipmentColor: "bronze",//'#CD7F32'

        weaponColor: "silver",//'#C0C0C0'
        weaponInitiative: 3,
        isShieldbreaker: false,

        missileWeaponColor: '',
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
        discipline: 1,
        formationCondition: 0,

        totalShields: 2,
        commonShields: 1,
        missileBlockShields: 1,
        shieldsColor: "bronze" //'#CD7F32'
    },
    {
        name: 'mercenaries',

        equipmentValue: 17,
        equipmentColor: "silver",//'#C0C0C0'

        weaponColor: "silver",//'#C0C0C0'
        weaponInitiative: 3,
        isShieldbreaker: false,

        missileWeaponColor: '',
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
        discipline: 2,
        formationCondition: 0,

        totalShields: 2,
        commonShields: 1,
        missileBlockShields: 1,
        shieldsColor: "silver" //'#C0C0C0'
    },
    {
        name: 'nobles',

        equipmentValue: 27,
        equipmentColor: "golden",//'#FFD700'

        weaponColor: "golden",//'#FFD700'
        weaponInitiative: 2,
        isShieldbreaker: false,

        missileWeaponColor: '',
        missileWeaponRange: 0,

        cohesion: 3,
        maxCohesion: 3,
        expirience: 2,
        health: 4,
        maxHealth: 4,
        fatigue: 0,
        maxFatigue: 5,
        will: 3,
        maxWill: 3,
        discipline: 3,
        formationCondition: 0,

        totalShields: 1,
        commonShields: 1,
        missileBlockShields: 0,
        shieldsColor: "golden" //'#FFD700'
    }
];