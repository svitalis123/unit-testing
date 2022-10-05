function  calculator(a, b) {
  add(a,b);
  multiply(a,b);
  divide(a,b);
  subtract(a,b);
}

function add(a, b){
  return a+b;
}

function subtract(a, b){
  return a-b;
}

function multiply(a,b){
  return a*b; 
}

function divide(a,b){
  return a/b;
}

module.exports = {add, divide, multiply, calculator,subtract};