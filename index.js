//first way

function playGame() {
  var imgarr = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
  ];

  var genrandom1 = Math.floor(Math.random() * imgarr.length);
  var player1 = (document.querySelector(".myimage1").src = imgarr[genrandom1]);

  var genrandom2 = Math.floor(Math.random() * imgarr.length);
  var player2 = (document.querySelector(".myimage2").src = imgarr[genrandom2]);

  if (player1 === player2) {
    document.querySelector("h1").textContent = "Its A Tie";
  } else if (player1 > player2) {
    document.querySelector("h1").textContent = "Player 1 Wins";
  } else {
    document.querySelector("h1").textContent = "Player 2 Wins";
  }
}

document.querySelector(".btn").addEventListener("click", playGame);

// second way

// var randomnumber = Math.floor(Math.random() * 6) + 1;
// var randomimages = "images/dice" + randomnumber + ".png";
// document.querySelectorAll("img")[0].setAttribute("src", randomimages);

// var randomnumber1 = Math.floor(Math.random() * 6) + 1;
// var randomimages1 = "images/dice" + randomnumber1 + ".png";
// document.querySelectorAll("img")[1].setAttribute("src", randomimages1);

// if (randomnumber === randomnumber1) {
//   document.querySelector("h1").innerHTML = "Its A Tie";
// } else if (randomnumber > randomnumber1) {
//   document.querySelector("h1").innerHTML = "Player 1 Wins";
// } else {
//   document.querySelector("h1").innerHTML = "Player 2 Wins";
// }
