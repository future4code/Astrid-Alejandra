//1. a-
// No terminal rodamos npm run nomeDoScript parametro.
//1. b-
console.log("hello world");
const myName = process.argv[2];
const age = Number(process.argv[3]);

console.log(`Hey, ${myName}! You're ${age} years old!`);
//1. c-
const futureAge = age + 7;
console.log(
  `Hey, ${myName}! You're ${age} years old! In seven years you'll be ${futureAge}.`
);
