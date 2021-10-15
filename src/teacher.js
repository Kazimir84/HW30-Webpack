// Teacher.js
let Person = require('./person');

class Teacher extends Person {
    constructor(name, age, gendor, interests) {     
        super(name, age, gendor, interests);
        this.subject = 'Physics';
    }
    hello() {
        console.log(`Hello my name is ${this.name} I'm ${this.age} years old, and I interest ${this.interests}. I teach a ${this.subject} subject`);  
    }
}
module.exports = Teacher;