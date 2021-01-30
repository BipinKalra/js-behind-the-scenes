// "use strict";

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1997) {
//       var millenial = true;
//       // const firstName = "Himanshi"; // Himanshi would replace Bipin in the next console.log statement as JS would find firstName in the current scope itself
//       // It wont have to move up the scope chain to look for firstName
//       const outputstring = `You are a millenial, ${firstName}!`;
//       console.log(outputstring);

//       function add(a, b) {
//         return a + b;
//       }

//       output = "CHANGED OUTPUT!";
//     }

//     // console.log(str); // const is block scoped and thus not defined here
//     console.log(millenial); // var is function scoped and thus can be accessed from a sibling block
//     // console.log(add(2, 3)); // function is also block scoped but it is function scoped if we don't use strict mode and thus this would work if we dont use strict modew
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = "Bipin";
// calcAge(1997);

// // Spread Operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[1], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const str = "javascript";
// const letters = [...str];
// console.log(letters);

// // REST operator -> looks the same as spread operator
// // The two can be differentiated as REST is used on the left side of the equal operator while spread is used on the right
// // REST pattern collects elements that are unused in the destructuring assignment
// const [a, b, ...others] = newArr;
// console.log(a, b, others);

// const add = function (a, b, ...operands) {
//   let sum = a + b;
//   for (let i = 1; i < operands.length; i++) {
//     sum += operands[i];
//   }

//   return sum;
// };

// console.log(add(3, 4, 7, 8, 9));
// console.log(add());
// // Calling it with less than two arguments would yield a NaN value.

// const y = [50, 60, 70, 100];

// console.log(add(...y));

// let restaurantGuests = 1;

// const guests = restaurantGuests || 10;
// // Quick way to assign default values
// console.log(guests);

// // The problem with approach shown above is that 1 ke case mein bhi 10 aayega
// // Nullish operator is same as || operator but it works on nullish values
// // falsy values = null, undefined, "", 1
// // nullish values = null. undefined

// // let restaurantGuests = 1;
// const guestsCorrect = restaurantGuests ?? 10;
// console.log(guestsCorrect);

console.log("-----------------------------");

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:1",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  // es6 enhanced object literals syntax allows us to write the function below with a cleaner syntax
  // printgoals: function (...players) {
  //   for (let i = 1; i < players.length; i++) {
  //     console.log(players[i]);
  //   }

  //   return players.length;
  // },

  // function keyword can be eliminated in the new and much cleaner syntax
  printgoals(...players) {
    for (let i = 1; i < players.length; i++) {
      console.log(players[i]);
    }

    return players.length;
  },
};

const [players1, players2] = game.players;
// console.log(players1, players2);

const [gk1, ...fieldPlayers1] = players1;
// console.log(gk1, fieldPlayers1);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers)

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const { team1, x, team2 } = game.odds;
// console.log(team1, x, team2);

const {
  odds: { team1, x: draw, team2 },
} = game;

const goalsScored = game.printgoals(...game.scored);
console.log(goalsScored);

for ([goalNumber, goalScorer] of game.scored.entries()) {
  console.log(`Goal ${goalNumber + 1}: ${goalScorer}`);
}

for (const [teamID, teamOdds] of Object.entries(game.odds)) {
  const teamName = game[teamID] ?? "draw";

  console.log(
    `Odds of ${
      teamName == "draw" ? "draw" : "victory of " + teamName
    }: ${teamOdds}`
  );
}

let scorers = {};

for (goalScorer of game.scored.values()) {
  if (!scorers[goalScorer]) {
    scorers[goalScorer] = 1;
  } else {
    scorers[goalScorer]++;
  }
}

console.log(scorers);

// const menu1 = ["pizza", "pasta", "burger"];
// const menu2 = ["jai", "mata", "di"];

// const menu = [...menu1, ...menu2];
// console.log(menu);

// // for - of loop for looping through arrays

// for (const item of menu) {
//   console.log(item);
// }

// // in case the index is also needed along with the element

// // for (const item of menu.entries()) {
// //   console.log(`${item[1] + 1}. ${item[1]}`);
// // }
// // The same can be done using destructuring, thereby being a cleaner way to achieve the same

// for (const [index, item] of menu.entries()) {
//   console.log(`${index + 1}. ${item}`);
// }

// // optional chaining

// const users = [
//   {
//     name: "Bipin",
//     email: "bipinkalra@gmail.com",
//   },
//   {
//     name: "Himanshi",
//     email: "vhimanshi14@gmail.com",
//   },
// ];

// // ?. is used for optional chaining
// console.log(users[1]?.name ?? "User does not have a name!");

// console.log("-----------------------------");

// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 1, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 1, time = "20:00", address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// // Looping through objects using for-og loops
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// for (const value of Object.values(openingHours)) {
//   console.log(value);
// }

// for (const [day, { open, close }] of Object.entries(openingHours)) {
//   // console.log(entry);
//   console.log(`On ${day}, we open at ${open} and close at ${close}.`);
// }

// // Maps in JS

// const question = new Map([
//   ["Question", "What is the best programing language in the world?"],
//   [1, "C"],
//   [2, "Python"],
//   [3, "JS"],
//   ["correct", 3],
//   [true, "Correct! :)"],
//   [false, "Try Again! :("],
// ]);

// console.log(question);

// // Simple way to convert from objects to maps
// console.log(typeof openingHours);
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log("Quiz App!");
// console.log(question.get("question"));

// for (const [key, value] of question) {
//   if (typeof key == "number") console.log(`${key}: ${value}`);
// }

// const answer = Number(prompt("Your Answer - "));
// console.log(answer);

// const message = console.log(question.get(answer === question.get("correct")));

// You can unpack a map to convert it back to an array if need be

// console.log([...question]);
