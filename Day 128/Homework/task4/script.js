// 4) შექმენით კლასი Character, რომელსაც ექნება health, damage, speed
//  და level. დაამატეთ static მეთოდი count_characters(), რომელიც 
//  დააბრუნებს რამდენი ობიექტი შეიქმნა ამ კლასიდან. შექმენით მოცემული
//   და კიდევ მოიფიქრეთ რამდენიმე ობიექტები:

// ninja
// samurai
// viking
// warrior
// veteran
// tribesman
// necromancer


class Character {
    count = 0;

  constructor(health, damage, speed, level) {
    this.health = health;
    this.damage = damage;
    this.speed = speed;
    this.level = level;
    Character.count++;
  }

  static count_characters() {
    console.log(Character.count)
  }

 
}
const ninja = new Character(100, 30, 90, 5)
const samurai = new Character(120, 40, 70, 6)
const viking = new Character(150, 50, 60, 7)
const warrior = new Character(110, 35, 75, 4)
const veteran = new Character(180, 45, 65, 8)
const tribesman = new Character(90, 25, 80, 3)
const necromancer = new Character(130, 55, 50, 9)


