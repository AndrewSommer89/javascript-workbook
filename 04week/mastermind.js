'use strict';

import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

/*
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout 
});
*/
let board = [];
let solution = 'a';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}


console.log(solution)
function generateSolution() {
  let generateSolutionArray = [];
  for (let i = 0; i > 4; i++) {
    generateSolutionArray.push(letters[getRandomInt(0,6)]);
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  //turns the passed in strings into arrays
  let solutionArray = solution.split('');
  let guessArray = guess.split('');
  //tells which letter locations are correct
  var correctLetterLocations = 0;
  //goes through each solution letter
  for(let i=0;i<solutionArray.length; i++){
    //goes through each guess letter
    for(let x = 0; x < guessArray.length; x++){
      if(solutionArray[i] === guessArray[x]){
        //if letters are the same increase correctLetterLocations and change solution letter to null
        correctLetterLocations = correctLetterLocations + 1;
        solutionArray[i] = null;
      }
    }
  }
    //says how many letters are correct
  var correctLetters = 0;
  for(let i = 0; i < solutionArray.length; i++){
    //set targetIndex to letter in solution array
    let targetIndex = solutionArray[i];
    //if the letter of solution array appears anywhere in guessArray, increase correctLetters & null that letter in solution array
    if(guessArray.indexOf(targetIndex)> -1){
      correctLetters = correctLetters + 1;
      solutionArray[i] = null;
    }
  }
  return correctLetterLocations + correctLetters;
}
var hint = generateHint(solution,guess);
board.push(hint);

function mastermind(guess) {
  //solution = 'abcd'; // Comment this out to generate a random solution
  if(guess == solution){
    return 'you guessed ot'
  } else {
    var hint = generateHint(solution,guess);
    board.push(hint);
  }

}
 

function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests
/*
if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
*/