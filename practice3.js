// let btn =document.querySelector("#btn");

// btn.onclick = () => {
//    console.log("Button  clicked");
// };

// let div= document.querySelector("div")
// div.onmouseover= () =>{ 
// console.log("Mouse over");
// };

// div.onmouseover=(evt)=>{
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log(evt.clientX,evt.clientY);
// }


//btn.addEventListener("click",(evt)=>{
//    console.log(evt.type)
//    console.log("btn was clicked");
// // });
// btn.addEventListener("click",()=>{
//     console.log("btn was clicked-handler0");
//  });
// const handler1=()=>{
//    console.log("button was clicked-handler1")
// }
// btn.addEventListener("click",handler1);
// btn.removeEventListener("click",handler1);

let div=document.querySelector("div");
div.addEventListener("mouseover",() => {
    document.querySelector("body").innerText.replace("Hello","welcome")
})