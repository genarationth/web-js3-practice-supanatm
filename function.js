//add
const add = function (a, b) {
  return a + b;
};

//subtract
const subtract = function (a, b) {
  return a - b;
};

//multiply
const multiply = function (a, b) {
  return a * b;
};

//divide
const divide = function (a, b) {
  return a / b;
};

console.log(add(10, 2));
console.log(subtract(10, 2));
console.log(multiply(10, 2));
console.log(divide(10, 2));

//another exercise inform
const info = function (firstName, location, hobby) {
  return `Hi, my name is ${firstName}. I live in ${location} and enjoy ${hobby}.`;
};
console.log(info("Supanat", "Nonthaburi", "football"));
