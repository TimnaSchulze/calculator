function saySomething(whatToSay) {
  window.alert(whatToSay);
}

function add(number1, number2) {
  return number1 + number2;
}

const result = add(10,5);
const outputText = "The sum is " + result + "."; 

const additionResult = add (10,5);
window.alert(additionResult);

const number1 = prompt("Enter a number:");
const number2 = prompt("Enter another number:");

window.alert(add(number1, number2));