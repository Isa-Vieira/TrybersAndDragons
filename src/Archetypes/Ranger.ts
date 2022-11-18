import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetypes {
  private _type: EnergyType;
  static cont = 0;

  constructor(name:string) {
    super(name);
    Ranger.cont += 1;
    this._type = 'stamina';
  }

  get energyType(): EnergyType { return this._type; }
  static createdArchetypeInstances(): number {
    return Ranger.cont;
  }
}