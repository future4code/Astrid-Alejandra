const colors = require("colors");

const operation = process.argv[2];

const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

const addition = () => console.log(`Answer: ${num1 + num2}`.red);
const subtraction = () => console.log(`Answer: ${num1 - num2}`.blue);
const multiplication = () => console.log(`Answer: ${num1 * num2}`.green);
const division = () => {
  if (num2 !== 0) {
    console.log(`Answer: ${num1 / num2}`.magenta);
  } else {
    console.log("Ooops, division by zero is not defined :(".cyan);
  }
};

if (operation) {
  switch (operation) {
    case "add":
      addition();
      break;
    case "mult":
      multiplication();
      break;
    case "subt":
      subtraction();
      break;
    case "div":
      division();
      break;
    default:
      console.log("");
  }
} else {
  console.log("Please choose a valid operation: add, subt, mult or div".grey);
}
if (!num1 || !num2) {
  console.log("Please, enter two numbers to get an answer".yellow);
}
