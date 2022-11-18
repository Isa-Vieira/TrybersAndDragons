import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetypes {
  private _type: EnergyType;
  static cont = 0;

  constructor(name:string) {
    super(name);
    Necromancer.cont += 1;
    this._type = 'mana';
  }

  get energyType(): EnergyType { return this._type; }
  static createdArchetypeInstances(): number {
    return Necromancer.cont;
  }
}