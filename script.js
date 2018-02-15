class Ninja{
    constructor(name){
        this.name=name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        return(`hello there ${this.name}`);
    }
    showStats(){
        return(`Speed: ${this.speed}, Strength:${this.strength}, Health:${this.health}`);
    }
    drinkSake(){
        this.health +=10;
        return this;
    }
}
class Sensei extends Ninja{
    constructor(name){
    super(name)
    this.health = 200;
    this.strength =10;
    this.speed= 10;
    this.wisdom =10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    showStats(){
        return(`Name:${this.name} Speed: ${this.speed}, Strength:${this.strength}, Health:${this.health}`);
    }
}

// const ninja1 = new Ninja("Huko");
// console.log(ninja1.sayName());
// ninja1.drinkSake();
// console.log(ninja1.showStats());
const superSensei = new Sensei("Master Splinter");
console.log(superSensei.showStats());
superSensei.speakWisdom();