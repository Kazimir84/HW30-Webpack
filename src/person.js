// Person.js
class Person {
    constructor(name, age, gendor, interests) {
        this.name = name;
        this.age = age;
        this.gendor = gendor;
        this.interests = interests
    }
    hello() {
        console.log(`Hello my name is ${this.name} I'm ${this.age} years old, and I interest ${this.interests}`);
    }
}

module.exports = Person;