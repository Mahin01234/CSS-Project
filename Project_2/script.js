(function() {
  'use strict';

  // ----- DOM Elements -----
  const resultEl = document.getElementById('result');
  const expressionEl = document.getElementById('expression');

  // ----- State -----
  let currentInput = '0';
  let previousInput = '';
  let operator = null;
  let shouldResetScreen = false;
  let expressionString = '';

  // ----- Helper Functions -----
  function updateDisplay() {
    resultEl.textContent = currentInput;
    expressionEl.textContent = expressionString;
  }

  function resetCalculator() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    shouldResetScreen = false;
    expressionString = '';
    resultEl.classList.remove('error');
    updateDisplay();
  }

  function calculate(a, op, b) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    if (isNaN(num1) || isNaN(num2)) return 'Error';

    let result;
    switch (op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '×':
        result = num1 * num2;
        break;
      case '÷':
        if (num2 === 0) return 'Error';
        result = num1 / num2;
        break;
      default:
        return num2;
    }

    // Handle floating point precision
    if (!Number.isInteger(result)) {
      result = parseFloat(result.toPrecision(12));
    }

    return String(result);
  }

  // ----- Input Handling -----
  function inputNumber(value) {
    if (shouldResetScreen) {
      currentInput = '0';
      shouldResetScreen = false;
    }

    if (value === '.' && currentInput.includes('.')) return;

    if (currentInput === '0' && value !== '.') {
      currentInput = value;
    } else {
      currentInput += value;
    }

    updateDisplay();
  }

  function inputOperator(op) {
    const current = parseFloat(currentInput);
    if (isNaN(current)) return;

    if (operator && !shouldResetScreen) {
      // Chain calculation
      const result = calculate(previousInput, operator, currentInput);
      if (result === 'Error') {
        resultEl.textContent = 'Error';
        resultEl.classList.add('error');
        operator = null;
        previousInput = '';
        currentInput = '0';
        expressionString = '';
        return;
      }
      currentInput = result;
      expressionString = `${result} ${op} `;
    } else {
      expressionString = `${currentInput} ${op} `;
    }

    previousInput = currentInput;
    operator = op;
    shouldResetScreen = true;
    updateDisplay();
  }

  function inputEquals() {
    if (!operator) return;

    const result = calculate(previousInput, operator, currentInput);
    if (result === 'Error') {
      resultEl.textContent = 'Error';
      resultEl.classList.add('error');
      operator = null;
      previousInput = '';
      currentInput = '0';
      expressionString = '';
      updateDisplay();
      return;
    }

    expressionString = `${previousInput} ${operator} ${currentInput} =`;
    currentInput = result;
    operator = null;
    previousInput = '';
    shouldResetScreen = true;
    resultEl.classList.remove('error');
    updateDisplay();
  }

  function inputPercent() {
    const num = parseFloat(currentInput);
    if (isNaN(num)) return;
    const result = num / 100;
    currentInput = String(result);
    updateDisplay();
  }

  function inputSign() {
    if (currentInput === '0') return;
    if (currentInput.startsWith('-')) {
      currentInput = currentInput.slice(1);
    } else {
      currentInput = '-' + currentInput;
    }
    updateDisplay();
  }

  function inputClear() {
    resetCalculator();
  }

  // ----- Button Click Handler -----
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const value = this.dataset.value;

      // Clear error state
      resultEl.classList.remove('error');

      // Handle different button types
      if (this.classList.contains('btn-number')) {
        inputNumber(value);
      } else if (this.classList.contains('btn-operator')) {
        inputOperator(value);
      } else if (this.classList.contains('btn-equals')) {
        inputEquals();
      } else if (this.classList.contains('btn-clear')) {
        inputClear();
      } else if (value === 'sign') {
        inputSign();
      } else if (value === 'percent') {
        inputPercent();
      }
    });
  });

  // ----- Keyboard Support -----
  document.addEventListener('keydown', function(e) {
    const key = e.key;

    // Prevent default for calculator keys
    if (
      (key >= '0' && key <= '9') ||
      key === '.' ||
      key === '+' ||
      key === '-' ||
      key === '*' ||
      key === '/' ||
      key === 'Enter' ||
      key === 'Backspace' ||
      key === 'Escape' ||
      key === '%' ||
      key === '='
    ) {
      e.preventDefault();
    }

    // Numbers and decimal
    if (key >= '0' && key <= '9') {
      inputNumber(key);
      return;
    }
    if (key === '.') {
      inputNumber('.');
      return;
    }

    // Operators
    if (key === '+') {
      inputOperator('+');
      return;
    }
    if (key === '-') {
      inputOperator('-');
      return;
    }
    if (key === '*') {
      inputOperator('×');
      return;
    }
    if (key === '/') {
      inputOperator('÷');
      return;
    }

    // Equals / Enter
    if (key === '=' || key === 'Enter') {
      inputEquals();
      return;
    }

    // Clear (Escape or Backspace)
    if (key === 'Escape') {
      inputClear();
      return;
    }
    if (key === 'Backspace') {
      if (shouldResetScreen) {
        inputClear();
        return;
      }
      if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
      } else {
        currentInput = '0';
      }
      updateDisplay();
      return;
    }

    // Percent
    if (key === '%') {
      inputPercent();
      return;
    }
  });

  // Initial display
  resetCalculator();
})();

