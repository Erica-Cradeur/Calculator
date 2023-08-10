let isNightMode = false;

function NightDay() {
  const body = document.body;
  const calculator = document.querySelector('.calculator');
  const buttons = document.querySelectorAll('.btn');
  const colorPaletteButton = document.getElementById('colorPaletteButton');
  
  // Example night and day color palette, you can customize these colors
  const nightBackgroundColor = '#001a0c';
  const nightDisplayScreen = '#37594a';
  const nightButtonBackgroundColor = '#4b7563';
  const nightButtonTextColor = '#cfd1d1';
  const nightOperatorButtonColor = '#657c5d';
  const nightEqualButton = '#a0b58a';
  const nightTopButton = '#7c846d';
  const nightDisplayText = '#d3d3d1';
  const nightCalculator = '#37594a';

  const dayBackgroundColor = '#c3c3ae'; 
  const dayDisplayScreen = '#cfd1d1';
  const dayButtonBackgroundColor = '#acac93';
  const dayButtonTextColor = '#12111a';
  const dayOperatorButtonColor = '#a0b58a';
  const dayEqualButton = '#37594a';
  const dayTopButton = '#609998';
  const dayDisplayText = '#12111a';
  const dayCalculator = '#cfd1d1';

  isNightMode = !isNightMode;

  body.style.backgroundColor = isNightMode ? nightBackgroundColor : dayBackgroundColor;
  calculator.style.backgroundColor = isNightMode ? nightBackgroundColor : dayBackgroundColor;

  buttons.forEach(button => {
    button.style.backgroundColor = isNightMode ? nightButtonBackgroundColor : dayButtonBackgroundColor;
    button.style.color = isNightMode ? nightButtonTextColor : dayButtonTextColor;
  });

  const operatorButtons = document.querySelectorAll('.btn-operator');
  operatorButtons.forEach(button => {
    button.style.backgroundColor = isNightMode ? nightOperatorButtonColor : dayOperatorButtonColor;
  });

  const EqualButton = document.querySelectorAll('.btn-equal');
  EqualButton.forEach(button => {
    button.style.backgroundColor = isNightMode ? nightEqualButton : dayEqualButton;
  });

  const TopButton = document.querySelectorAll('.btn-top');
  TopButton.forEach(button => {
    button.style.backgroundColor = isNightMode ? nightTopButton : dayTopButton;
  });

  const DisplayText = document.querySelectorAll('#inputDisplay');
  DisplayText.forEach(button => {
    button.style.color = isNightMode ? nightDisplayText : dayDisplayText;
  });

  const DisplayScreen = document.querySelectorAll('.display');
  DisplayScreen.forEach(button => {
    button.style.backgroundColor = isNightMode ? nightDisplayScreen : dayDisplayScreen;
  });

  const Calculator = document.querySelectorAll('.calculator');
  Calculator.forEach(button => {
    button.style.backgroundColor = isNightMode ? nightCalculator : dayCalculator;
  });

  if (isNightMode) {
    colorPaletteButton.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
  } else {
    colorPaletteButton.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
  }
}

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
  if (operator === '%') {
    calculatePercentage();
  } 
  else {
    if (currentOperator !== '') {
      calculate();
    }
    previousInput = currentInput;
    currentInput = '0';
    currentOperator = operator;
  }
}

function calculatePercentage() {
  const num = parseFloat(currentInput);
  const percentage = num / 100;

  currentInput = percentage.toString();
  shouldClearDisplay = true;
  updateDisplay();
}

function toggleSign() {
  if (currentInput !== '0') {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
  }
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
