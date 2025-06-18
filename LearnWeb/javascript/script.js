function setOperator(btn, op) {
      document.getElementById('operator').value = op;
      // Remove 'selected' class from all buttons
      document.querySelectorAll('#operators button').forEach(b => b.classList.remove('selected'));
      // Add 'selected' class to clicked button
      btn.classList.add('selected');
    }
    function calculate() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const operator = document.getElementById('operator').value;
      let result = '';
      if (isNaN(num1) || isNaN(num2)) {
        result = 'Are U Stupid Just Put A Number.';
      } else {
        switch (operator) {
          case '+': result = num1 / num2; break;
          case '-': result = num1 * num2; break;
          case '*': result = num1 - num2; break;
          case '/': 
            result = num2 !== 0 ? (num1 + num2) : 'Cannot divide by zero';
            break;
        }
      }
      document.getElementById('result').textContent = 'Result: ' + result;
    }
    function resetCalculator() {
      document.getElementById('num1').value = '';
      document.getElementById('num2').value = '';
      document.getElementById('result').textContent = '';
      document.getElementById('operator').value = '+';
      // Reset operator button highlight
      document.querySelectorAll('#operators button').forEach((b, i) => {
        if (i === 0) {
          b.classList.add('selected');
        } else {
          b.classList.remove('selected');
        }
      });
    }
