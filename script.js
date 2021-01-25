"use strict";

function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = "Bipin";
calcAge(1997);
