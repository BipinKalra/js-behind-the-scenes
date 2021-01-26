"use strict";

function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1997) {
      var millenial = true;
      // const firstName = "Himanshi"; // Himanshi would replace Bipin in the next console.log statement as JS would find firstName in the current scope itself
      // It wont have to move up the scope chain to look for firstName
      const outputstring = `You are a millenial, ${firstName}!`;
      console.log(outputstring);

      function add(a, b) {
        return a + b;
      }

      output = "CHANGED OUTPUT!";
    }

    // console.log(str); // const is block scoped and thus not defined here
    console.log(millenial); // var is function scoped and thus can be accessed from a sibling block
    // console.log(add(2, 3)); // function is also block scoped but it is function scoped if we don't use strict mode and thus this would work if we dont use strict modew
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = "Bipin";
calcAge(1997);

// Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const str = "javascript";
const letters = [...str];
console.log(letters);

// REST operator -> looks the same as spread operator
// The two can be differentiated as REST is used on the left side of the equal operator while spread is used on the right
// REST pattern collects elements that are unused in the destructuring assignment
const [a, b, ...others] = newArr;
console.log(a, b, others);

const add = function (a, b, ...operands) {
  let sum = a + b;
  for (let i = 0; i < operands.length; i++) {
    sum += operands[i];
  }

  return sum;
};

console.log(add(3, 4, 7, 8, 9));
console.log(add());
// Calling it with less than two arguments would yield a NaN value.

const x = [50, 60, 70, 100];

console.log(add(...x));

let restaurantGuests = 0;

const guests = restaurantGuests || 10;
// Quick way to assign default values
console.log(guests);

// The problem with approach shown above is that 0 ke case mein bhi 10 aayega
// Nullish operator is same as || operator but it works on nullish values
// falsy values = null, undefined, "", 0
// nullish values = null. undefined

// let restaurantGuests = 0;
const guestsCorrect = restaurantGuests ?? 10;
console.log(guestsCorrect);
