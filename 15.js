// let a=setTimeout(()=>{alert("you can skip in 10s")},5000)
// let b=prompt("do you run settimeout")
// if(b=="no"){
// clearTimeout(a)
// }console.log(a)
// const sum=(a,b,c)=>{
//   console.log (a+b+c)
//   a+b
// }
// setTimeout(sum,1000,1,3,5)
//repeatly function call krta h 
// setInterval(function(){
//   alert("fjuij"),3000
// })
// setInterval(sum,5000,1+2+3)
// function sum(a,b){
//   console.log(a+b);
// }
//callback
// function cal(a,b,sum){
//   sum(a,b);
// }
// cal(1,2,sum)
//callback hell
// function getdata(id,nextid){
//   setTimeout(() => {
//     console.log("you id is"+ id)
//     if(nextid){
//       nextid();
//     }
//   }, 2000);
// }

// getdata(1,()=>{
//   getdata(2,()=>{
//     getdata(3)
//   })
// })

// promise
// let promise=new Promise((resolve,reject)=>{
//   console.log("your proise is here");
// reject("success");}
// )

// function getdata(id,nextid){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("your id"+id);
//       reject("your req is completed")
//       if(nextid){
//         nextid()
//       }
//     }, 2000);
//   })
// }

// const getPromise=()=>{
//   return new Promise((resolve,reject)=>{
//     console.log("hello");
//     // resolve("success");
//     reject("your req is denied")
//   });
// };
// let promise=getPromise();
// promise.then((res)=>{
// console.log("your promise is succesful",res)
// });
// promise.catch((err)=>{
//   console.log("your promise is rejected",err)
// });

// for 2 function
// function Asyn1(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("my data is here")
//       resolve("success")
//     }, 5000);
// }
//   )}
//   function Asyn2(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//         console.log("my data2 is here")
//         resolve("success")
//       }, 5000);
//   }
//     )}
   
// console.log("fetching data");
// Asyn1().then((res)=>{
// console.log("fetching data2")
// Asyn2().then((res)=>{})
// })

//for 1 function
// function getdata(id){
//   return new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     console.log("you id is"+ id)
//     resolve("your data transfered succefully")
//   }, 2000);})
// }

// // getdata(1).then((res)=>{
// //   getdata(2).then((res)=>{
// //     console.log("no more data ")})
// // })

// //promise chain
//  getdata(1).then((res)=>{
// return getdata(2);})
// .then((res)=>{
//   return getdata(3);}).then((res)=>{ console.log("no more data ")
//  });

// function api(){
// return new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     console.log("you data transfered");
//     resolve(200);},2000);
// });
// }

// async function data(){
//   await api();
//   await api();
// }

function getdata(id){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("you id is"+ id)
      resolve("your data transfered succefully")
    }, 2000);})
  }
  (async function(){
    await getdata(1);
    await getdata(2);
    await getdata(3);
    
  })()