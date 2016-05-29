'use strict';

const Person = require('./Person');

class Student extends Person {
  constructor(name, teacher) {
    super(name);
    this.name = name;
    teacher.on('check', (name) => {
      if (name === this.name) {
        this.emit('answer');
        //console.log(`hello Mr. ${teacher.name}`)
      }
    });
  }
}

module.exports = Student;
