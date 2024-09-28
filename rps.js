let userscore=0;
let compscor=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const  compScorePara= document.querySelector("#comp-score") 

const gencompuchoice=()=>{
   const option=["rock","paper","scissor"];
   const randIDx=Math.floor(Math.random()*3);
   return option[randIDx];
}

const drawgame=()=>{
   msg.innerText="Game Draw";
   msg.style.backgroundColor="#081b31";
}
const showWinner=(userwin,userchoice,compuchoice)=>{
   if (userwin){
    userscore++;
    userScorePara.innerHTML=userscore;
      msg.innerText=`User Win! Your ${userchoice} beats ${compuchoice}`;
      msg.style.backgroundColor="green";
   
   }else{
      compscor++;
      compScorePara.innerText=compscor;
      msg.innerText=`User Loss ${compuchoice} beats your ${userchoice}`;
   msg.style.backgroundColor="red";
     
}
}

const playGame=(userchoice)=>{
   console.log("user choice = ",userchoice)
   const compuchoice=gencompuchoice();
   console.log("computer choice = ",compuchoice)

  if(userchoice===compuchoice){
   drawgame();
  }
  else{
   let userwin=true;
   if(userchoice==="rock"){
      //scissors,paper
      userwin=compuchoice==="paper"? false : true;
   } else if(userchoice==="paper"){
      //stone,scissors
      userwin=compuchoice==="scissor" ? false : true;
   }
   else{
      //userchoice=scisscor
      //computerchoice
      //rock ,paper
      userwin=compuchoice==="rock" ? false : true;
   }
   showWinner(userwin,userchoice,compuchoice);
  }


}


choices.forEach((choice)=>{
   choice.addEventListener("click",()=>
 {const userchoice=choice.getAttribute("id")
  playGame(userchoice) ;

 })
})