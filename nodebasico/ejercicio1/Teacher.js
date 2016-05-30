'use strict';

const Person = require('./Person');

class Teacher extends Person {
  constructor(name) {
    super(name);
    this.name = name;
  }

  checkStudentsList(list) {
    list.forEach(item => this.emit('check', item));
  }
}

module.exports = Teacher;
