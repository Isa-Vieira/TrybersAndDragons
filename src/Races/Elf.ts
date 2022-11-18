import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  static cont = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Elf.cont += 1;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
  static createdRacesInstances(): number {
    return Elf.cont;
  }
}