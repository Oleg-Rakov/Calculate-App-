let numbers = document.querySelectorAll('.numbers')
let operation = document.querySelectorAll('.operation')

let resultButton = document.getElementById('result')
let input = document.getElementById('input')
input.value = 0;

let number1;
let memoryOperation;

for(let i = 0; i < numbers.length;i++) {
  let numberButton = numbers[i];
  if(input.value === '0') {
    numberButton.addEventListener('click', numberButtonClickListener)
  }
}

function numberButtonClickListener(element) {
  if(input.value === '0') {
    input.value = null;
    input.value = input.value + element.currentTarget.innerHTML
  } else {
    input.value = input.value + element.currentTarget.innerHTML
  }
}

for(let i = 0;i < operation.length;i++) {
  let operationButton = operation[i]
    operationButton.addEventListener('click', operationButtonClickListener)
}

function operationButtonClickListener(element) {
  number1 = Number(input.value)
  input.value = null;
  memoryOperation = element.currentTarget.innerHTML
}

function resultButtonClickListener() {
  let number2 = Number(input.value)
  let result = 0;

  if(memoryOperation === "+") {
    result = number1 + number2
  } else if(memoryOperation === '-') {
    result = number1 - number2
  } else if(memoryOperation === '*') {
    result = number1 * number2
  } else if(memoryOperation === '/') {
    result = number1 / number2
  }
  input.value = result;
}

resultButton.addEventListener('click', resultButtonClickListener)