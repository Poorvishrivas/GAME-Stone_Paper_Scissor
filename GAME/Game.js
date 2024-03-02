let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const generateComputerChoice=()=>{
    const options=["stone","paper","scissor"];
    //stone paper scissor
    const randIndx=Math.floor(Math.random()*3);//Random function to find random value//math.floor is to convert decimal value to integer
    return options[randIndx];
};
const drawGame=()=>{
//  console.log("Game was draw");
 msg.innerText="Game was Draw.Play again";
 msg.style.backgroundColor="blue";
 
};
const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    // console.log("Congratulations You Win");
    msg.innerText=`Congratulations You Win!! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}
else{
    compScore++;
    compScorePara.innerText=compScore;
    // console.log("You Loss.");
    msg.innerText=`You loss!! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
}


};
const playGame=(userChoice)=>{
    // console.log("user choice=",userChoice);
    // generate computer choice---Modular way of programming
    const compChoice=generateComputerChoice();
    // console.log("comp choices=",compChoice);
    if(userChoice===compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice==="stone"){
            // paper scissor
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //stone scissor
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            //rock paper
            userWin=compChoice==="stone"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);

    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});