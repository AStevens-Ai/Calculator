// basic math operators: add; subtract; multiply; divide

let inputNum1 = 0;

let inputOperator = '';

let inputNumb2 = 0;

const disp = document.querySelector('.display');

const numBtn = document.querySelectorAll('.btn-nmb');

const operBtn = document.querySelectorAll('.btn-operator');

const clear = document.querySelector('.clear');

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

function operate(op, var1, var2) {}
