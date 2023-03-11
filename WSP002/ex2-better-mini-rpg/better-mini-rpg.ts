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

  //.. The remaining methods.
}


// * Monster *
class Monster {
    // Think of how to write injure
    hp: number;
    id: string

    constructor(hp: number, id: string) {
        this.hp = hp;
        this.id = id;
    }

    report() {
        console.log(`Monster Name: ${this.id}, HP: ${this.hp}`);
    }
}

