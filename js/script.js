let currentInput = '0';
let currentOperator = '';
let previousInput = '';
let shouldClearDisplay = false;

const displayElement = document.getElementById('display');
const inputDisplayElement = document.getElementById('inputDisplay');

function updateDisplay() {
  updateInputDisplay();
  displayElement.textContent = currentInput;
}

function updateInputDisplay() {
  inputDisplayElement.value = currentInput;
}

function handleDigitClick(digit) {
  if (shouldClearDisplay) {
    currentInput = digit;
    shouldClearDisplay = false;
  } else {
    currentInput = currentInput === '0' ? digit : currentInput + digit;
  }
  updateDisplay();
}

function handleOperatorClick(operator) {
  if (currentOperator !== '') {
    calculate();
  }
  previousInput = currentInput;
  currentInput = '0';
  currentOperator = operator;
}

function calculate() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result = 0;

  switch (currentOperator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  currentInput = result.toString();
  currentOperator = '';
  shouldClearDisplay = true;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  currentOperator = '';
  shouldClearDisplay = false;
  updateDisplay();
}

updateDisplay();
