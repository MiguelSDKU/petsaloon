// function challenge1(num1) {
//   let double = num1 * 2;
//   return double;
// }

// let challenge = challenge1(2);
// let challenge_1 = challenge1(9);

// console.log(challenge);
// console.log(challenge_1);

// let num1 = parseInt(prompt("Give me a number: "));
// console.log(`The double of ${num1} is ${num1 * 2}`);

// Mini Challenge //

function area(length, width) {
  let area = length * width;
  return area;
}

function rectangle(length, width) {
  const rectangleElement = document.querySelector(".rectangle");
  rectangleElement.style.width = `${width}px`;
  rectangleElement.style.height = `${length}px`;
}

let length = parseInt(prompt("Give me the length: "));
let width = parseInt(prompt("Give me the width: "));

console.log(`The area is ${area(length, width)} units`);

rectangle(length, width);

const areaMessageElement = document.getElementById("area");
areaMessageElement.textContent = `The area is: ${area(length, width)} units`;
