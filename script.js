var clear = document.getElementById('clear');
var display = document.getElementById('display');
var plus = document.getElementById('plus');
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

var expression = [];
var num1;
var operator;
var num2;

function updateDisplay() {
  display.innerHTML = expression;
}

clear.addEventListener('click', function() {

});

plus.addEventListener('click', function() {
  expression += "+";
  updateDisplay();
});

$0.addEventListener('click', function() {

});

$1.addEventListener('click', function() {
  expression += 1;
  updateDisplay();
});

$2.addEventListener('click', function() {

});

$3.addEventListener('click', function() {

});

$4.addEventListener('click', function() {

});

$5.addEventListener('click', function() {

});

$6.addEventListener('click', function() {

});

$7.addEventListener('click', function() {

});

$8.addEventListener('click', function() {

});

$9.addEventListener('click', function() {

});
