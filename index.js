//For Player 1 dice
//Random number between 1 and 6
var randomNumber1 = Math.floor(Math.random()*6) + 1;


//variable to select the dice image based on random number
var randomDiceImg = "dice"+randomNumber1+".png";

var randomImageSource = "images/" + randomDiceImg; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImageSource);

//For Player 2 dice
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


//For changing title text based on the winner
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
