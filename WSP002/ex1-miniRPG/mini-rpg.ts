// Declaration of Class and its methods
export default class Player {
    private strength: number;
    private name: string;
    
    constructor(strength: number, name: string) {
      this.strength = strength;
      this.name = name;
    }
  
    attack(monster: Monster) {
      // Your code
      let attackStrength: number = 0;
      if (Math.random()>0.7) {
        attackStrength = this.strength*2;
      } else {
        attackStrength = this.strength;
      }

      monster.injure(attackStrength)


      // report being attack
      console.log(`Player ${player} attacks a monster (HP: ${monster.hp})`, ``);
    }
  
    gainExperience(exp: number) {
      // Your code
    }

    report() {
        console.log(`Player Name: ${this.name}, Strength: ${this.strength}`);
    }
  }
  
class Monster {
    // Think of how to write injure
    protected hp: number;
    public readonly id: string

    constructor(hp: number, id: string) {
        this.hp = hp;
        this.id = id;
    }

    injure(strength: number) {
      if (strength > this.hp) {
        this.hp = 0;
      } else {
      this.hp -= strength;
      }
    }

    report() {
        console.log(`Monster Name: ${this.id}, HP: ${this.hp}`);
    }
}
  
// Invocations of the class and its methods
const player = new Player(20, "Peter");
const monster = new Monster(100, "Monmon");

// English counterpart: Player attacks monster
player.attack(monster);
// monster.report();
player.attack(monster);
// monster.report();
player.attack(monster);
// monster.report();
player.attack(monster);
// monster.report();



// Result expect:
// Player Peter attacks a monster (HP: 80)
// Player Peter attacks a monster (HP: 60)
// Player Peter attacks a monster (HP: 20) [CRITICAL]
// Player Peter attacks a monster (HP: 0)