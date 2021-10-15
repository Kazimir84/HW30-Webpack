// Students.js
let Person = require('./person');

class Students extends Person {
    constructor(name, age, gendor, interests) {
        super(name, age, gendor, interests);
    }
    hello() {
        super.hello(this.name, this.age);          
    }
}
module.exports = Students;
