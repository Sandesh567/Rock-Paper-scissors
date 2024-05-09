let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
 
//genrating the random value
const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    // storing in array and generating randomly using Math.random()
    const randIdx = Math.floor(Math.random () * 3);
    return options[randIdx];
};

//draw function
const drawGame = () => {
    msg.innerText = "Game Was draw -> play Again";
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
       userChoice++;
       userScorePara.innerText = userScore;
        msg.innerText =`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You win! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";

    }
};


//computer
const playGame = (userChoice) => {
    //generating computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice)
        {
            drawGame();
        } else
            {
                let userWin = true;
                if(userChoice === "rock")
                    {//scissors paper check from comp choice
                        userWin = compChoice === "paper" ? false : true;
                    } else if(userChoice === "paper"){
                        //rock scissors
                       userWin=  compChoice === "scissors" ? false: true;
                    }else{
                        //rock,paper
                        userWin = compChoice === "rock" ? false: true;
                    }
                    showWinner(userWin,userChoice,compChoice);
             }
};

//modular programming making one function for one operations
//user

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
    const userChoice = choice.getAttribute("id");//to return the id attribute
    playGame(userChoice);
    });
});