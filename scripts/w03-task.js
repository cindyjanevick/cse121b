/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}
function addNumbers() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);
  document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function substract(number1, number2) {
  return number1 - number2;
}
function substractNumbers() {
  let substract1 = Number(document.querySelector("#subtract1").value);
  let substract2 = Number(document.querySelector("#subtract2").value);
  document.querySelector("#difference").value = substract(
    substract1,
    substract2
  );
}

document
  .querySelector("#subtractNumbers")
  .addEventListener("click", substractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
  let factor1 = parseInt(document.querySelector("#factor1").value);
  let factor2 = parseInt(document.querySelector("#factor2").value);
  document.querySelector("#product").value = multiply(factor1, factor2);
};

document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
  return number1 / number2;
}
function divideNumbers() {
  let dividend = parseInt(document.querySelector("#dividend").value);
  let divisor = parseInt(document.querySelector("#divisor").value);
  divide(dividend, divisor);
  document.querySelector("#quotient").value = divide(dividend, divisor);
}
document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click", function () {
  let subtotal = parseFloat(document.querySelector("#subtotal").value);
  let membershipChecked = document.querySelector("#member").checked;
  let total = subtotal;
  if (membershipChecked) {
    total *= 0.8; // Applying 20% discount
  }
  document.querySelector("#total").textContent = `Total Due: $${total.toFixed(
    2
  )}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").textContent = numbersArray.join(", ");

/* Output Odds Only Array */
let oddsArray = numbersArray.filter((number) => number % 2 !== 0);
document.querySelector("#odds").textContent = oddsArray.join(", ");
/* Output Evens Only Array */
let evensArray = numbersArray.filter((number) => number % 2 === 0);
document.querySelector("#evens").textContent = evensArray.join(", ");

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector("#sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map((number) => number * 2);
document.querySelector("#multiplied").textContent = multipliedArray.join(",");

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;
