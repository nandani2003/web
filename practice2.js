// let num1,num2;
// function sum(num1,num2){
//    let sum=num1+num2;
//    console.log(sum);
// }
// sum(6,6)
// let num;
// let factorial=1;
// function fac(num){
//    for(let i=1;i<=num;i++){
//       factorial=factorial*i;
//    console.log(factorial);
//    }}



// const arroesum=(a,b)=>{
//    return a+b;
// };
// fac(5);

// function vowel(str){
//     let count=0;
//       for(const char of str){
//     if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//       count++;
//    }
//    }console.log(count);
// }
// 
// arr.forEach(function print(printval){
//    console.log(printval)
// });
//or
/*higher order function takes function as an parameter with foreach or rweturn a function value 
// let arr=[31,28,34,45,87];
// arr.forEach((val,idx,arr) =>{
//    console.log(val,idx,arr)
// }
// );*/
//foreach
let num=[1,2,3,4,5]
// num.forEach((num)=>{
//    console.log(num*num)
// });

//map
// let newarr=num.map(
//    (val)=>{
//  return val;
// });
// console.log(newarr);

//filter
// let new_arr=num.filter((val)=>
// {
//    return val%2===0;
// });console.log(new_arr);

//reduce
// const output=num.reduce((res,curr)=>{
//    return res+curr;
// }); console.log(output);
// let arr=[5,3,2,8,1];
// const output= arr.reduce ((prev,curr)=>{
//    return prev>curr?prev:curr;
// });
// console.log(output);

// let arr=[31,28,34,45,98,87];
// let newarr=arr.filter((val)=>{
//    return val>50;
// });console.log(newarr);

let n=prompt("enter the num:");
  let arr=[];
for(let i=1;i<=n;i++){
   arr[i-1]=i;
}console.log(arr);

let new_arr = arr.reduce((prev,curr)=>{
   return prev*curr;
});
console.log(new_arr)