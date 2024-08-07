function greet(name) {
  return `Hello, ${name}!`;
}

const greet1 = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet1("masoma"));

// task 2
let sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(2, 3));

// task 3
let squares = (num3) => {
  return num3 * num3;
};
console.log(squares(4));

// example :

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.forEach((num5) => {
  console.log(num5);
});

const numbers1 = [1, 2, 3, 5, 9, 6, 12, 9];
let min = numbers1[0];
numbers1.forEach((num6) => {
  if (min > num6) min = num6;
});
console.log(min);

//challenge
// first solution:
//const numbers2 = [2, 3, 4, 5, 6];
//let number3 = [];
//numbers2.forEach((num7) => {
//  number3.push(num7 * num7);
//});
//console.log(number3);

const numbers2 = [2, 3, 4, 5, 6];

let num = numbers2.map((num) => {
  return num * num;
});
console.log([num]);
