import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  static cont = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Dwarf.cont += 1;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
  static createdRacesInstances(): number {
    return Dwarf.cont;
  }
}
