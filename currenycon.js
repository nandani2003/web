  const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies" ;
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");

  const btn=document.querySelector(`form button`);
const dropdowns=document.querySelectorAll(".dropdown select");
for(let select of dropdowns){
for(currCode in countryList){
  let newoption=document.createElement("option");
  newoption.innerText=currCode;
  newoption.value=currCode;
  if(select.name==="from"&&currCode==="USD"){
   newoption.selected="selected";
  }else  if(select.name==="to"&&currCode==="INR"){
   newoption.selected="selected";
  }select.append(newoption);
}
select.addEventListener("change",(evt)=>{
   updateFlag(evt.target);
});
}
const updateFlag=(element)=>{
   let currCode=element.value;
   let countryCode=countryList[currCode];
   let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png` ;
let img =element.parentElement.querySelector("img");
img.src=newSrc;
}
btn.addEventListener(  "click",async(evt)=>{
    evt.preventDefault();
    let amount=document.querySelectorAll(".amount input")
   let amtval=amount.value;
   if(amtval==""||amtval<1){
      amtval=1;
      amount.value="1";
   }
   // console.log(fromCurr,toCurr);
const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response = await fetch(URL);
let data=await response.json();
console.log(data);
})


