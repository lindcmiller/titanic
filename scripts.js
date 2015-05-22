(function () {
  'use strict';

  var records = csvToObjects(titanic, ['id', 'survived', 'pclass', 'name', 'sex', 'age', 'ticket', 'fare'], true);

  console.log(records);
})();

function average(array) {
  function sum(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
