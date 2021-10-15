const Students = require('./student');
const Teacher = require('./teacher');

let student = new Students('Alex', 25, 'Male', 'Sports');
let teacher = new Teacher('Jack', 45, 'Male', 'History');
console.log('Student', student);
console.log('Teacher', teacher);

console.log(teacher.hello(teacher.name, teacher.age, teacher.subject));
console.log(student.hello(student.name, student.age));