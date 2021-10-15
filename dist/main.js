/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/***/ ((module) => {

// Person.js
class Person {
  constructor(name, age, gendor, interests) {
    this.name = name;
    this.age = age;
    this.gendor = gendor;
    this.interests = interests;
  }

  hello() {
    console.log(`Hello my name is ${this.name} I'm ${this.age} years old, and I interest ${this.interests}`);
  }

} // let person = new Person();


module.exports = Person;

/***/ }),

/***/ "./src/student.js":
/*!************************!*\
  !*** ./src/student.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Students.js
let Person = __webpack_require__(/*! ./person */ "./src/person.js");

class Students extends Person {
  constructor(name, age, gendor, interests) {
    super(name, age, gendor, interests);
  }

  hello() {
    super.hello(this.name, this.age);
  }

}

module.exports = Students;

/***/ }),

/***/ "./src/teacher.js":
/*!************************!*\
  !*** ./src/teacher.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Teacher.js
let Person = __webpack_require__(/*! ./person */ "./src/person.js");

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const Students = __webpack_require__(/*! ./student */ "./src/student.js");

const Teacher = __webpack_require__(/*! ./teacher */ "./src/teacher.js");

let student = new Students('Alex', 25, 'Male', 'Sports');
let teacher = new Teacher('Jack', 45, 'Male', 'History');
console.log('Student', student);
console.log('Teacher', teacher);
console.log(teacher.hello(teacher.name, teacher.age, teacher.subject));
console.log(student.hello(student.name, student.age));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLEdBQVIsQ0FBWU8sT0FBTyxDQUFDVCxLQUFSLENBQWNTLE9BQU8sQ0FBQ2IsSUFBdEIsRUFBNEJhLE9BQU8sQ0FBQ1osR0FBcEMsQ0FBWixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHczMC13ZWJwYWNrLy4vc3JjL3BlcnNvbi5qcyIsIndlYnBhY2s6Ly9odzMwLXdlYnBhY2svLi9zcmMvc3R1ZGVudC5qcyIsIndlYnBhY2s6Ly9odzMwLXdlYnBhY2svLi9zcmMvdGVhY2hlci5qcyIsIndlYnBhY2s6Ly9odzMwLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHczMC13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFBlcnNvbi5qc1xyXG5jbGFzcyBQZXJzb24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgYWdlLCBnZW5kb3IsIGludGVyZXN0cykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XHJcbiAgICAgICAgdGhpcy5nZW5kb3IgPSBnZW5kb3I7XHJcbiAgICAgICAgdGhpcy5pbnRlcmVzdHMgPSBpbnRlcmVzdHNcclxuICAgIH1cclxuICAgIGhlbGxvKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBIZWxsbyBteSBuYW1lIGlzICR7dGhpcy5uYW1lfSBJJ20gJHt0aGlzLmFnZX0geWVhcnMgb2xkLCBhbmQgSSBpbnRlcmVzdCAke3RoaXMuaW50ZXJlc3RzfWApO1xyXG4gICAgfVxyXG59XHJcbi8vIGxldCBwZXJzb24gPSBuZXcgUGVyc29uKCk7XHJcbm1vZHVsZS5leHBvcnRzID0gUGVyc29uOyIsIi8vIFN0dWRlbnRzLmpzXHJcbmxldCBQZXJzb24gPSByZXF1aXJlKCcuL3BlcnNvbicpO1xyXG5cclxuY2xhc3MgU3R1ZGVudHMgZXh0ZW5kcyBQZXJzb24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgYWdlLCBnZW5kb3IsIGludGVyZXN0cykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGFnZSwgZ2VuZG9yLCBpbnRlcmVzdHMpO1xyXG4gICAgfVxyXG4gICAgaGVsbG8oKSB7XHJcbiAgICAgICAgc3VwZXIuaGVsbG8odGhpcy5uYW1lLCB0aGlzLmFnZSk7ICAgICAgICAgIFxyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gU3R1ZGVudHM7XHJcbiIsIi8vIFRlYWNoZXIuanNcclxubGV0IFBlcnNvbiA9IHJlcXVpcmUoJy4vcGVyc29uJyk7XHJcblxyXG5jbGFzcyBUZWFjaGVyIGV4dGVuZHMgUGVyc29uIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFnZSwgZ2VuZG9yLCBpbnRlcmVzdHMpIHsgICAgIFxyXG4gICAgICAgIHN1cGVyKG5hbWUsIGFnZSwgZ2VuZG9yLCBpbnRlcmVzdHMpO1xyXG4gICAgICAgIHRoaXMuc3ViamVjdCA9ICdQaHlzaWNzJztcclxuICAgIH1cclxuICAgIGhlbGxvKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBIZWxsbyBteSBuYW1lIGlzICR7dGhpcy5uYW1lfSBJJ20gJHt0aGlzLmFnZX0geWVhcnMgb2xkLCBhbmQgSSBpbnRlcmVzdCAke3RoaXMuaW50ZXJlc3RzfS4gSSB0ZWFjaCBhICR7dGhpcy5zdWJqZWN0fSBzdWJqZWN0YCk7ICBcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFRlYWNoZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImNvbnN0IFN0dWRlbnRzID0gcmVxdWlyZSgnLi9zdHVkZW50Jyk7XHJcbmNvbnN0IFRlYWNoZXIgPSByZXF1aXJlKCcuL3RlYWNoZXInKTtcclxuXHJcbmxldCBzdHVkZW50ID0gbmV3IFN0dWRlbnRzKCdBbGV4JywgMjUsICdNYWxlJywgJ1Nwb3J0cycpO1xyXG5sZXQgdGVhY2hlciA9IG5ldyBUZWFjaGVyKCdKYWNrJywgNDUsICdNYWxlJywgJ0hpc3RvcnknKTtcclxuY29uc29sZS5sb2coJ1N0dWRlbnQnLCBzdHVkZW50KTtcclxuY29uc29sZS5sb2coJ1RlYWNoZXInLCB0ZWFjaGVyKTtcclxuXHJcbmNvbnNvbGUubG9nKHRlYWNoZXIuaGVsbG8odGVhY2hlci5uYW1lLCB0ZWFjaGVyLmFnZSwgdGVhY2hlci5zdWJqZWN0KSk7XHJcbmNvbnNvbGUubG9nKHN0dWRlbnQuaGVsbG8oc3R1ZGVudC5uYW1lLCBzdHVkZW50LmFnZSkpOyJdLCJuYW1lcyI6WyJQZXJzb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJhZ2UiLCJnZW5kb3IiLCJpbnRlcmVzdHMiLCJoZWxsbyIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIlN0dWRlbnRzIiwiVGVhY2hlciIsInN1YmplY3QiLCJzdHVkZW50IiwidGVhY2hlciJdLCJzb3VyY2VSb290IjoiIn0=