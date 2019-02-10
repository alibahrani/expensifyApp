//setup constructor to take name and age default to zero 
// getDescription -> string Ali is 35 years old.


class Person  {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `hi I am ${this.name}` ;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name,age, major) {
        super(name,age);
        this.major = major;
    }
}

// add homeLocation 

class Traveler extends Person {
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;

    }

    getGretting() {
        let greeting = super.getGretting();
        if(this.homeLocation) {
            greeting += `. I'm visiting ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student('Ali', 35);
console.log(me)
console.log(me.getGretting());

const other = new Person();
console.log(other);

console.log(me.getDescription());

const traveler = new Traveler('Hussain', 40);
console.log(traveler)
console.log(traveler.getGretting());
