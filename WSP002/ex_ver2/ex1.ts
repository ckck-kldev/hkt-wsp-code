// Declaration of Class and its methods
class Player {
  private strength: number;
  private name: string;
  private criticalChance: number;

  constructor(strength: number, name: string) {
    this.strength = strength;
    this.name = name;
    this.criticalChance = 0.7;
  }

  attack(monster: Monster) {
    // Your code
    let attackStrength: number;
    let monsterHp: number = monster.getHp();
    let criticalMsg: string = ``
    if (Math.random() > this.criticalChance) {
      attackStrength = this.strength * 2;
    } else {
      attackStrength = this.strength;
    }
    if (attackStrength > this.strength) {
        criticalMsg = `[CRITICAL]`
    }
    if (monsterHp != 0) {
      monsterHp = monster.injure(attackStrength);
      console.log(`Player ${this.name} attacks a monster (HP: ${monsterHp})` + `${criticalMsg}`);
      if (monsterHp == 0) {
        this.gainExperience(monster.getExp());
      }
    }
  }

  gainExperience(exp: number) {
    // Your code
    console.log(`Got experience: ${exp}`);
  }
  report() {
    console.log(`Player: ${this.name}, Strength: ${this.strength}`);
  }
}

class Monster {
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
    return this.level*1.5;
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

// Invocations of the class and its methods
const player = new Player(20, "Peter");
const monster = new Monster(100, 10);
player.report();
monster.report();
player.attack(monster);
player.attack(monster);
player.attack(monster);
player.attack(monster);
// English counterpart: Player attacks monster
