 let id1=document.getElementById("id1")
 let sp1=document.getElementById("sp1")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
console.log(id1.contains(sp1))
console.log(id1.closest("#sp1"))
// let userchoice=prompt("enter your move");
// const gencompuchoice=()=>{
//   const option=["snake","water","gun"];
//   const randIDx=Math.floor(Math.random()*3);
//   return option[randIDx];
// }
// let compuchoice=gencompuchoice();
// if(userchoice===compuchoice){
//   alert("draw");
// }
// else{
//   let userwin;
//   if(userchoice==="snake"){
//      //gun,water
//      userwin=compuchoice==="water"? false : true;
//   } else if(userchoice==="water"){
//      //stone,scissors-
//      userwin=compuchoice==="gun" ? false : true;
//   }
//   else if(userchoice==="gun"){
//      //userchoice=scisscor
//      //computerchoice
//      //rock ,paper
//      userwin=compuchoice==="snake" ? false : true;}
//      else{
//       alert("invalid choice");
//      }
//     if(userwin){
//       alert("you win");
//     }else{
//       alert("you lose");
//     }
//   }

