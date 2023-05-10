console.log("Welcome to Tic Tac Toe");

let turn = "X";
let isGameOver = false;

// function to change turn
function changeTurn() {
  //   turn === "X" ? "O" : "X";
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}

// function to check for win
function checkWin() {
  let boxTexts = document.getElementsByClassName("box-text");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[1]].innerText === boxTexts[e[2]].innerText &&
      boxTexts[e[0]].innerText !== "" &&
      !isGameOver
    ) {
      document.querySelector(".info").innerText =
        boxTexts[e[0]].innerText + " won the match";
      isGameOver = true;
      document.getElementsByTagName("img")[0].style = "opacity:1;";
    }
  });
}

// main logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".box-text");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      changeTurn();
      checkWin();
      if (isGameOver == false) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// reset button
reset.addEventListener("click", () => {
  let boxTexts = document.getElementsByClassName("box-text");
  Array.from(boxTexts).forEach((e) => {
    e.innerText = "";
  });
  turn = "X";
  isGameOver = false;
  if (isGameOver == false) {
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    // document.getElementsByClassName("info")[0].style = ""
  }
  document.getElementsByTagName("img")[0].style = "opacity:0;";
});
