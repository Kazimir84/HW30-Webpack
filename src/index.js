const Students = require('./student');
const Teacher = require('./teacher');

let student = new Students('Alex', 25, 'Male', 'Sports');
let teacher = new Teacher('Jack', 45, 'Male', 'History');
console.log('Student', student);
console.log('Teacher', teacher);

// создаем элемент заголовка
const heading = document.createElement('h1')
heading.textContent = 'Как интересен этот Webpack!!'

// добавляем заголовок в DOM
const root = document.querySelector('#root')
root.append(heading);
