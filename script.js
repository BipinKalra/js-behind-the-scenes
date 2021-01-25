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
