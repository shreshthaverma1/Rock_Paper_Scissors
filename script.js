let userScore = 0;
let systemScore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genCompChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
};

const drawGame = () => {
  msg.innerText = "Game was a Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}!`;
    msg.style.backgroundColor = "green";
  } else {
    systemScore++;
    compScorePara.innerText = systemScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}!`;
    msg.style.backgroundColor = "#8B0000";
    msg.style.color = "white" 
  }
};

const playGame = (userChoice) => {
  // Generate computer's choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true; // Default assumption

    if (userChoice === "Rock") {
      //scissors, paper
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      //rock, scissors
      userWin = compChoice === "Scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "Rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});






