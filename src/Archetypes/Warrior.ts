import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetypes {
  private _type: EnergyType;
  static cont = 0;

  constructor(name:string) {
    super(name);
    Warrior.cont += 1;
    this._type = 'stamina';
  }

  get energyType(): EnergyType { return this._type; }
  static createdArchetypeInstances(): number {
    return Warrior.cont;
  }
}