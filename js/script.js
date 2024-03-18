"use strict";

const dice = document.querySelector(".dice");
const roll = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
// const current = document.querySelector("current--1");
const currentOne = document.querySelector(".current-score");
const score = document.querySelector("#score--0");
const playerTwo = document.querySelector("#player--1");

// console.log(dice.src);

roll.addEventListener("click", diceRoll);
function diceRoll() {
  const randomNum = Math.trunc(Math.random() * 6 + 1);
  dice.src = `images/dice-${randomNum}.png`;
  // currentOne.innerText = randomNum;
  let finalScore = Number(currentOne.innerText);
  console.log(randomNum);
  if (randomNum === 1) {
    console.log(1);
  } else {
    finalScore += randomNum;
    currentOne.innerText = finalScore;
  }
}

// hold.addEventListener("click", function () {
//   score.textContent = currentOne.innerText;

//   currentOneValue = currentOne.innerText;
//   if (randomNum === 1) {
//     console.log(1);
//   } else {
//     currentOne += randomNum;
//   }
// });
