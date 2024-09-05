// let userScore=0;
// let compScore=0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg"); 
// const userscorePoints = document.querySelector("#user-score");
// const compscorePoints = document.querySelector("#comp-score");

// const GenCompChoice = ()=>{
//     const options = ["rock", "paper", "scissors"];
//     const randIdx= Math.floor(Math.random() * 3);
//     return options[randIdx];
// } 

// const drawGame = () => {
//     console.log("Game was draw");
//     msg.innerText = "Game Draw!"
//     msg.style.backgroundColor = "yellow";
// }

// const showWinner = (userWin, UserChoice, CompChoice) => {
//     if(userWin) {
//         userScore++;
//         userscorePoints.innerText = userScore; 
//         console.log("you win!");
//         msg.innerText  = `you Win! Your ${UserChoice} beats ${CompChoice}`;
//         msg.style.backgroundColor = "green";
//     }
//     else{
//         compScore++;
//         compscorePoints.innerText = compScore;
//         console.log("you lose!");
//         msg.innerText = `you lose! ${CompChoice} beats your ${UserChoice}`;
//         msg.style.backgroundColor = "red";
//     }
// }

// const PlayGame = (UserChoice)=>{
//     console.log("user choice = ", UserChoice);
//     const CompChoice = GenCompChoice();
//     console.log("computer choicec = ", CompChoice);

//     if(UserChoice === CompChoice){
//         drawGame();
//     }
//     else{
//         let userWin = true;
//         if (UserChoice === "rock"){
//             userWin = CompChoice === "paper" ? false : true;
//         }
//         else if(UserChoice === "paper"){
//             userWin = CompChoice === "rock" ? true : false;
//         }
//         else{
//             userWin=CompChoice === "rock" ? false: true;
//         }
//         showWinner(userWin, UserChoice, CompChoice);
//     }
// };

// choices.forEach((choice) =>{
//     choice.addEventListener("click",()=>{
//         const UserChoice = choice.getAttribute("id");
//         PlayGame(UserChoice);       //Calling playGame Passing Userhoice
//     });
// });

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePoints = document.querySelector("#user-score");
const compscorePoints = document.querySelector("#comp-score");

const GenCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = " #7a001f";  
    msg.classList.add("show");
}

const showWinner = (userWin, UserChoice, CompChoice) => {
    if (userWin) {
        userScore++;
        userscorePoints.innerText = userScore;
        userscorePoints.classList.add("bounce");
        msg.innerText = `You Win! Your ${UserChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";  
    } else {
        compScore++;
        compscorePoints.innerText = compScore;
        compscorePoints.classList.add("bounce");
        msg.innerText = `You Lose! ${CompChoice} beats your ${UserChoice}`;
        msg.style.backgroundColor = "red";  
    }
    msg.classList.add("show");
    setTimeout(() => {
        msg.classList.remove("show");
    }, 2000);
}

const PlayGame = (UserChoice) => {
    const CompChoice = GenCompChoice();
    const userChoiceElement = document.querySelector(`#${UserChoice}`);
    const compChoiceElement = document.querySelector(`#${CompChoice}`);

    userChoiceElement.classList.add("bounce");
    compChoiceElement.classList.add("bounce");

    setTimeout(() => {
        userChoiceElement.classList.remove("bounce");
        compChoiceElement.classList.remove("bounce");
    }, 500);

    if (UserChoice === CompChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (UserChoice === "rock") {
            userWin = CompChoice === "paper" ? false : true;
        } else if (UserChoice === "paper") {
            userWin = CompChoice === "rock" ? true : false;
        } else {
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin, UserChoice, CompChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const UserChoice = choice.getAttribute("id");
        PlayGame(UserChoice);
    });
});
