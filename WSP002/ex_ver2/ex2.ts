/* 

A better RPG will have multiple types of players that you can choose. And their ability will be as follow

Player types	Primary Attack(Damage)	Secondary Attack(Damage)
Amazon	Bow and Arrow(30)	Throwing Spear(40)
Paladin	Swords(50)	Magic Spells(25)
Barbarian	Swords(55)	Throwing Spear(30)
With the first column being the primary attack , second column being the secondary attack. Players can switch by altering a boolean property called usePrimaryAttack which by default should be true.

Inside the bracket, you can find the damage of each different type of attack. The damage on the monsters should depends on the type of damage.


*/

interface Attack {
  damage: number;
}

class BowAndArrow implements Attack {
  //Bow and Arrow Attack here
  damage = 30;
}

class ThrowingSpear implements Attack {
  // Throwing Spear Attack here
  damage = 40;
}

interface Player {
  attack(monster: Monster): void;
  switchAttack(): void;
  gainExperience(exp: number): void;
}

class Amazon implements Player {
  private primary: Attack;
  private secondary: Attack;
  private usePrimaryAttack: boolean;
  constructor() {
    this.primary = new BowAndArrow(/*Need some params here*/);
    this.secondary = new ThrowingSpear(/*Need some params here*/);
    // TODO: set the default value of usePrimaryAttack
    this.usePrimaryAttack = true;
  }

  attack(monster: Monster): void {
    if (this.usePrimaryAttack) {
      // TODO: use primary attack
    } else {
      // TODO: use secondary attack
    }
  }

  switchAttack() {
    // TODO: Change the attack mode for this player
  }

  gainExperience() {}
  //.. The remaining methods.
}
enum Type {
  amazon,
  paladin,
  barbarian,
}

class Player {
  private type: Type;
  private name: string;
  constructor(type: Type, name: string) {
    this.name = name;
    this.type = type;
  }
}

class Monster {
  // You can use the `Monster` before
  private hp: number;
  private level: number;
  private gotExped: boolean;
  constructor(hp: number, level: number) {
    this.hp = hp;
    this.level = level;
    this.gotExped = false;
  }
  getHp() {
    return this.hp;
  }
  getExp() {
    if (this.hp == 0) {
      return this.level * 1.5;
    } else {
      return 0;
    }
    this.gotExped = true;
  }
  injure(attackStrength: number) {
    if (attackStrength > this.hp) {
      this.hp = 0;
    } else {
      this.hp -= attackStrength;
    }

    return this.hp;
  }
  report() {
    console.log(`Monster HP: ${this.hp}`);
  }
}

const monster = new Monster(100, 10);
monster.report();

const fury = new Player(amazon, "Fury")

