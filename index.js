let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
var messageEl = document.getElementById('message-el')

// var sumEl = document.getElementById('sum-el')
// we've another way to grab element

let sumEl = document.querySelector("#sum-el")
// more dynamic method, here we're more specific. That is actually the element with the ID of some URL that we're looking for.
let cardsEl = document.querySelector("#cards-el")

let player = {
  name: "Aniket",
  chips: 369
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCards(){

  let randomNumber = Math.floor(Math.random() * 13) + 1

  if(randomNumber === 1){
    return 11;
  }
  else if(randomNumber > 10){
    return 10;
  }
  return randomNumber;
}


function startGame(){
  isAlive = true

  firstCard = getRandomCards()
  seconCard = getRandomCards()

  cards = [firstCard, seconCard]
  sum = firstCard + seconCard

  renderGame()
}

function renderGame() {
  if(sum <= 20){
    message = "Do you want to draw a new Card?"
}
else if(sum === 21){
    message = "Wohoo! you've got BlackJack"
    hasBlackJack = true
}
else{
    message = "you're out of game"
    isAlive = false
}
  messageEl.textContent = message
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: " 

  for(let i = 0; i<cards.length; i++){
    cardsEl.textContent += cards[i] + " "
  }
}


function newCard() {

  if( isAlive === true && hasBlackJack === false){
    let card = getRandomCards()

    sum = sum + card  
    cards.push(card)
     
    renderGame()
  }
 
}


// let messages = ["Hey! how it's going?",
//                 "I'm great, thank you. How about you?",
//               "All good, been working on portfolio, lately"]

// let newmessages = "Same here!"

// messages.push(newmessages)

// for(let i = 0; i < messages.length; i+=1){
//   console.log(messages[i])
// }

// let array = [5,69,09]

// for(let i = 0; i < array.length; i++){
//   console.log(array[i])
// }

// let player1Time = 104
// let player2Time = 102

// function totalRaceTime(){
//   return player1Time + player2Time
// }
// let totalTime = totalRaceTime()

// console.log(totalTime)


// let randomNumber = Math.random() *  6
// console.log(randomNumber)

// let flooredNumber = Math.floor(Math.random() * 6) + 1
// console.log(flooredNumber)

// function rollDice(){
//   let flooredNumber = Math.floor(Math.random() * 6) + 1
//   return flooredNumber; 
// }


// (1) object and functions practice
let person = {
  name: "Aniket",
  age: 18,
  country: "India"
}

let playerInfoEl = document.getElementById('player-info-el');
function diaplayPlayerData(){

  playerInfoEl.textContent += person.name + " is " + person.age + " years old and lives in " + person.country;
  logData();
}
function logData(){

  playerInfoEl = person.name + " is " + person.age + " years old and lives in " + person.country;
  console.log(playerInfoEl);
}



// (2) if else practice 

// let age = 5
// if(age<6){
//   console.log('FREE');
// }
// else if(age <= 17){
//   console.log('child discount');
// }
// else if(age <= 26){
//   console.log('student discount');
// }
// else if(age <= 66){
//   console.log('full price');
// }
// else{
//   console.log('senior citizen discount');
// }



// (3) loops and arrays practice

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"];
// use for loop to log out countries name, in given manner
/* 
The 5 largest countries in the world
- China
- India
- USA
- Indonesia
- Pakistan
*/

// console.log('The 5 largest countries in the world')
// for(let i = 0; i < largeCountries.length; i++){
//   console.log("- "+largeCountries[i] + '\n');
// }



// (4) push, pop,unshift,shift practice

// fixup the largecountries array using push(), pop(), shift(), and unshift() function


// let largeCountries = ["tuvalu","India","USA","Indonesia","Monaco"];

// largeCountries.pop();
// largeCountries.push('Pakistan');
// largeCountries.shift();
// largeCountries.unshift('China');

// console.log('The 5 largest countires in the world');
// for(let i = 0; i < largeCountries.length; i++){
//   console.log("-" + largeCountries[i] + "\n");
// } 



// (5) logical operations practice

// let dayOfMonth  = 13;
// let weekday = "Friday";

// if(dayOfMonth === 13 && weekday === "Firday"){
//   console.log("Spooky");
// }
// else{
//   console.log('Normal');
// }



// (6) Rock Paper Scissors

// Create a function that returns a random item from the array
// let hands = ["Rock","Paper","Scissor"];


// function rockPaperScissor(){
//   let random = Math.floor(Math.random()*30);
//   console.log(random)
//   if(random < 10){
//     return hands[0];
//   }
//   else if(random < 20){
//     return hands[1];
//   }
//   return hands[2];
// }

// console.log(rockPaperScissor());



// (6) Sorting Fruits

// let fruit = ["Apple","Orange","Apple","Apple","Orange"];
// let appleShelf = document.getElementById("apple-shelf");
// let orangeShelf = document.getElementById("orange-shelf");

// putOnAppleShelf();
// function putOnAppleShelf() { 
  
//   for(let i = 0; i < fruit.length; i++){
//     let checkString = "Apple";
//     if(checkString === fruit[i]){
//       appleShelf.textContent += fruit[i] + i + " ";
//     }
//   }
// }
// putOnOrangeShelf();

// function putOnOrangeShelf(){

//   for(let i = 0; i< fruit.length; i++){
//     let checkString = "Orange";
//     if(checkString === fruit[i]){
//        orangeShelf.textContent += fruit[i] + i + " ";
//     }
//   }
// }