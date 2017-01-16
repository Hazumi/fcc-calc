var clear = document.getElementById('clear');
var display = document.getElementById('display');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var divide = document.getElementById('divide');
var multiply = document.getElementById('multiply');
var decimal = document.getElementById('decimal');

var equals = document.getElementById('equals');
var $0 = document.getElementById('0');
var $1 = document.getElementById('1');
var $2 = document.getElementById('2');
var $3 = document.getElementById('3');
var $4 = document.getElementById('4');
var $5 = document.getElementById('5');
var $6 = document.getElementById('6');
var $7 = document.getElementById('7');
var $8 = document.getElementById('8');
var $9 = document.getElementById('9');

var expression = "0";
var lastInputType;
var lastTypeDecimal = false;

function updateDisplay() {
  display.innerHTML = expression;
}

equals.addEventListener('click', function() {
  expression = eval(expression);
  display.innerHTML = expression;
  lastInputType = "equals";
});

clear.addEventListener('click', function() {
  lastInputType = "clear";
  expression = "0";
  updateDisplay();
});

// create operator button
function buttonOperator(btn, operator) {
  btn.addEventListener('click', function() {
    if (lastInputType != "operator") {
      lastInputType = "operator"
      expression += operator;
      updateDisplay();
    }
  });
}

buttonOperator(plus, "+");
buttonOperator(minus, "-");
buttonOperator(divide, "/");
buttonOperator(multiply, "*");

// create number button
function buttonNum(btn, num) {
  btn.addEventListener('click', function() {
    if (lastInputType == "operator" || lastInputType == Number && expression != "0") {
      expression += num;
    } else {
      expression = num;
    }
    lastInputType = Number;
    lastTypeDecimal = false;
    updateDisplay();
  });
}

decimal.addEventListener('click', function() {
  if (!lastTypeDecimal) {
    if (lastInputType == "operator" || lastInputType == Number || expression == "0") {
      expression += ".";
    }
    lastInputType = Number;
    lastTypeDecimal = true;
    updateDisplay();
  }

});

buttonNum($0, "0");
buttonNum($1, "1");
buttonNum($2, "2");
buttonNum($3, "3");
buttonNum($4, "4");
buttonNum($5, "5");
buttonNum($6, "6");
buttonNum($7, "7");
buttonNum($8, "8");
buttonNum($9, "9");
