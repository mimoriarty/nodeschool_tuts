/* EJERCICIO 1 */

'use strict';

const
  Teacher = require('./Teacher'),
  Student = require('./Student'),
  teacher = new Teacher ('Daniel sanJuan'),
  classRoom = {
    students : [new Student('Victor Puebla', teacher), new Student('JuanJose Carmona', teacher), new Student('Laura Ocarina', teacher)],
    studentsNamesList : ['Victor Puebla', 'JuanJose Carmona', 'Carlos Barron', 'Pablo Moncunil', 'Laura Ocarina'],
    studentsPresentList : [],
  };

for (let item of classRoom.students) {
  item.on('answer', () => {
    //console.log(`Good morning, ${item.name}`);
    classRoom.studentsPresentList.push(item.name);
  });
}

teacher.checkStudentsList(classRoom.studentsNamesList);
console.log(classRoom.studentsPresentList);
