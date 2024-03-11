// basic math operators: add; subtract; multiply; divide

let inputNum1 = 0;

let inputOperator = '';

let inputNumb2 = 0;

function add(arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}
