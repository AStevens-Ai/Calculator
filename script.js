// basic math operators: add; subtract; multiply; divide

let inputNum1 = '';

let inputOperator = '';

let inputNumb2 = '';

let sun = '';

const disp = document.querySelector('.display');

const numBtn = document.querySelectorAll('.btn-nmb');

const operBtn = document.querySelectorAll('.btn-operator');

const clear = document.querySelector('.btn-clear');

const equal = document.querySelector('.equal')

const updateDisplay = function(value) {
  if(value === '1'|| value === '2'|| value === '3' || value === '4' || value === '5' || value === '6' || value === '7' || value === '8' || value === '9' || value === '0') {
    if(!inputOperator){
    inputNum1 += value
    disp.textContent += value
    console.log(`inputnum1: ${inputNum1}`)}
    else {
      inputNumb2 += value
      disp.textContent += value
      console.log(`inputnumb2: ${inputNumb2}`)
    } }
     else if(value == '+' || value == '-' || value == 'x'|| value == '/') {
    inputOperator = value
    disp.textContent += value
    console.log(`operator: ${inputOperator}`)
  } 
} 

numBtn.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    updateDisplay(value);
  })
})

operBtn.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    updateDisplay(value)
  })
})

equal.addEventListener('click', () => {
operate(inputOperator, inputNum1, inputNumb2)
console.log('equal is pressed')
})

clear.addEventListener('click', () => {
   disp.textContent = ''
  inputNum1 = ''
  inputNumb2 = ''
  inputOperator = ''
})
function add(a, b) {
  return parseInt(a) + parseInt(b);
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

function operate(op, var1, var2) {
  switch(op){
  case '+':
    let addSum = add(var1, var2)
     disp.textContent = addSum;
     inputNumb2 = ''
     inputOperator = '';
    return inputNum1 = addSum
  case '-':
    let subSum = subtract(var1, var2)
    disp.textContent = subSum;
    inputNumb2 = ''
    inputOperator = '';
    return inputNum1 = subSum
  case 'x':
    let multSum = multiply(var1, var2)
    disp.textContent = multSum;
    inputNumb2 = ''
    inputOperator = '';
    return inputNum1 = multSum;
  case '/':
    let divSum = divide(var1, var2)
    disp.textContent = divSum;
    inputNumb2 = ''
    inputOperator = '';
    return inputNum1 = multSum;
  default:
    return 'invalid variable'
    }
}
