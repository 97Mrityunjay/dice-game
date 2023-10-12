
const finalScoreOne = document.querySelector("#score-0");

const finalScoreTwo = document.querySelector("#score-1");

const currentScore = document.querySelectorAll(".current-score");
// console.log(currentScore);
const diceImg = document.querySelector(".dice-img");

const  resetGame = document.querySelector(".btn--new");

const rollDice = document.querySelector(".btn--roll");

const holdBtn = document.querySelector(".btn--hold");

const playerOne = document.querySelector(".player-0");

const playerTwo = document.querySelector(".player-1")
var players = 1;

rollDice.addEventListener("click", function(){
  let randomNumber = Math.trunc(Math.random()*6) + 1;
   console.log(randomNumber);
   diceImg.style.display = "block"
   if(Number(finalScoreOne.innerHTML)<=20 && Number(finalScoreTwo.innerHTML)<=20)
   {
        if(randomNumber===1 && players===1)
        {
            
            
                diceImg.setAttribute("src", "./dice-1.png");
                currentScore[0].innerHTML = `0`;
                players = 2;
                holdBtn.disabled = true;

        }
        else if(players===2 && randomNumber===1)
        {
                diceImg.setAttribute("src", "./dice-1.png");
                currentScore[1].innerHTML =`0`;
                players=1;
                holdBtn.disabled= true;

        }
        
        else if(randomNumber===2 && players===1)
        {
               diceImg.setAttribute("src", "./dice-2.png");
               currentScore[0].innerHTML = Number(currentScore[0].innerHTML) + randomNumber; 
               holdBtn.disabled= false;
                
        }
        else if(randomNumber===2 && players===2)
        {

                diceImg.setAttribute("src", "./dice-2.png");
                currentScore[1].innerHTML = Number(currentScore[1].innerHTML) + randomNumber;
                holdBtn.disabled= false;

        }
        else if(randomNumber===3 && players===1)
        {
            
           
                diceImg.setAttribute("src", "./dice-3.png");
                currentScore[0].innerHTML = Number(currentScore[0].innerHTML) + randomNumber;
                holdBtn.disabled= false;
                
        }
       else if(randomNumber===3 && players===2)
       {
             diceImg.setAttribute("src", "./dice-3.png");
             currentScore[1].innerHTML = Number(currentScore[1].innerHTML) + randomNumber;
             holdBtn.disabled= false;
        }
            
        
        else if(randomNumber===4 && players===1)
        {
            
          
                diceImg.setAttribute("src", "./dice-4.png");
                currentScore[0].innerHTML = Number(currentScore[0].innerHTML) + randomNumber;
                holdBtn.disabled=false;
                
        }
        else if(randomNumber===4 && players===2)
        {
                diceImg.setAttribute("src", "./dice-4.png");
                currentScore[1].innerHTML = Number(currentScore[1].innerHTML) + randomNumber;
                holdBtn.disabled=false;
        }
        
        else if(randomNumber===5 && players===1)
        {
            
               diceImg.setAttribute("src", "./dice-5.png");
                currentScore[0].innerHTML = Number(currentScore[0].innerHTML) + randomNumber;
                holdBtn.disabled= false;
        }
        else if(randomNumber===5 && players===2)
        {
                diceImg.setAttribute("src", "./dice-5.png");
                currentScore[1].innerHTML = Number(currentScore[1].innerHTML) + randomNumber;
                holdBtn.disabled= false;
        }
        
        else if(randomNumber===6 && players===1)
        {
            
            
                diceImg.setAttribute("src", "./dice-6.png");
                currentScore[0].innerHTML = Number(currentScore[0].innerHTML) + randomNumber;
                holdBtn.disabled= false;
                
        }
        else if(randomNumber===6 && players===2)
        {
                diceImg.setAttribute("src", "./dice-6.png");
                currentScore[1].innerHTML = Number(currentScore[1].innerHTML) + randomNumber;
                holdBtn.disabled= false;
        }   
    
   }
})

holdBtn.addEventListener("click", function(){
    if(players===1)
    {
       finalScoreOne.innerHTML = Number(finalScoreOne.innerHTML)+Number(currentScore[0].innerHTML);
       currentScore[0].innerHTML = `0`;
       players = 2;

    }
    else if(players===2){
        finalScoreTwo.innerHTML = Number(finalScoreTwo.innerHTML)+Number(currentScore[1].innerHTML);
        currentScore[1].innerHTML = `0`;
        players = 1;
    }
    if(Number(finalScoreOne.innerHTML)>20)
    {
        playerOne.style.backgroundColor = `#414141`;
        diceImg.style.display = `none`;
    }
    else if(Number(finalScoreTwo.innerHTML)>20)
    {
        playerTwo.style.backgroundColor = `#414141`;
        diceImg.style.display = `none`;
    }
})


resetGame.addEventListener("click", ()=>{
    currentScore[0].innerHTML = `0`;
    currentScore[1].innerHTML =`0`;
    finalScoreOne.innerHTML = `0`;
    finalScoreTwo.innerHTML =`0`;
    playerOne.style.backgroundColor = `#DAAEBC`;
    playerTwo.style.backgroundColor = `#B77A9A`;
    diceImg.style.display = "none";
})