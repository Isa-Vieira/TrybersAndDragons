import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetypes {
  private _type: EnergyType;
  static cont = 0;

  constructor(name:string) {
    super(name);
    Mage.cont += 1;
    this._type = 'mana';
  }

  get energyType(): EnergyType { return this._type; }
  static createdArchetypeInstances(): number {
    return Mage.cont;
  }
}