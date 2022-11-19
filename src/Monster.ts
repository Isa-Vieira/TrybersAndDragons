import Energy from './Energy';
import SimpleFighter from './Fighter/SimpleFighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
    this._defense = 0;
  }

  energy?: Energy | undefined;

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    } if (damage <= 0) {
      this._lifePoints -= 1;
    } if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    } return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): number {
    return this._lifePoints;
  }
    
  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }
}