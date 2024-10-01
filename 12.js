// let h2=document.querySelector("h2");
// console.log(h2.innerText);
// h2.innerText=h2.innerText+"from my side";

// let divs=document.querySelectorAll(".box")
// let idx=1;
// for(div of divs ){
// div.innerText=`new unique val${idx}`;
// idx++;
// }

// let runagain=true;
// while(runagain){
// let value=prompt("enter your number");
// if(value>18&&value<60){
//   alert("you can drive");
// }else{
//   alert("you can't drive");
// }runagain=confirm("do you want to play again");
// }
// let num=prompt("enter no")
// num=Number.parseInt(num)
// if(num<4){
//   location.href='https://google.com'
// }let color=prompt("enter your desired color")
// document.body.style.background=color;

// console.log(document.body.firstChild)
//  a=document.body.firstChild;
// console.log(a.parentElement);
// console.log(a.parentNode);
let a=(document.body.firstElementChild);
console.log(a.rows);
console.log(a.caption)
console.log(a.tHead)

//Foreach 
// let arr=[3,4,5,6,7];
//  arr.forEach((value,ind,arr)=>{
//   console.log(value+"at index"+ind +"in array"+arr );
// });

//Map
// let a=arr.map((val,ind,array)=>{
//   console.log(val,ind,array);
//   return val+1
// })
// console.log(a)

//Filter
// let b=arr.filter((a)=>{
//   return a<6
// })
// console.log(b)

//Reduce
// let c=arr.reduce((h1,h2)=>{
//   return h1+h2;
// })
// console.log(c);

let str1="my name is nandani";
let counter=0;
for(let i=0;i<str1.length;i++)
 {
  if(str1.charAt(i)<=1){
    counter++;
    console.log(`${str1.charAt}is occuring ${counter}`)
  }
 }
