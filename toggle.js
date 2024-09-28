let mode=document.querySelector("#mode")
let body=document.querySelector("body")
let currentmode="light"
mode.addEventListener("click",()=>{
   if(currentmode==="light"){
      currentmode="dark"
   // document.querySelector("body").style.backgroundColor="black";}
   body.classList.add("dark")
   body.classList.remove("light")
}
   else{
      currentmode="light"
      // document.querySelector("body").style.backgroundColor="white";}
      body.classList.add("light");
      body.classList.remove( "dark");
   }
   
});
console.log(currentmode);