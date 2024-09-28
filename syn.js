//callback
//function getdata(dataid,getNextdata){
   
//    setTimeout(()=>{
//       console.log("data",dataid);
//       if(getNextdata){
//          getNextdata();
//       }
//    },2000);
// }

//callback hell
// getdata(1,()=>{
//    getdata(2),()=>{
//    getdata(3);
// };
// });


//promise
// let promise =new Promise((resolve,reject) =>{
//    console.log("i m groot");
//    // resolve("succeful");
//    reject("error 404 occured");
// }); 

// function getdata(dataid,getNextdata){
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//           console.log("data",dataid);
//           resolve("sucess");
//           if(getNextdata){
//              getNextdata();
//           }
//        },4000);
//       });
//     }

// const getPromise=()=>{
//    return new Promise((resolve,reject)=>{
//       console.log("i am promise");
//       // resolve("success");
//       reject("error");
//    });
// }
// ;
// let promise=getPromise();
// promise.then((res)=>{
//    console.log("promise fulfilled");
// });

// promise.catch((err)=>{
//    console.log("rejected",err);
// });

// function asyncfun1(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          console.log("data1");
//          resolve("done");
//       },4000);
//    })
// }
// function asyncfun2(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          console.log("data2");
//          resolve("done");
//       },4000);
//    })
// }
// console.log("fetching data1...")
// let p1=asyncfun1();
// p1.then((res)=>{
//    console.log("fetching data2...");
//    let p2=asyncfun2();
// });

// function getdata(dataid){
//       return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          console.log("data",dataid);
//          resolve("succes");
//       },2000);
//    });}
//    getdata(1).then((res)=>{
//          console.log(res);
//          getdata(2).then((res)=>{
//             console.log(res);
//       })
//    ;})


   //async and await
   // function api(){
   //    return new Promise((resolve,reject)=>{
   //       setTimeout(()=>{
   //          console.log("wheater data");
   //          resolve(200);
   //       },3000)
   //       });
   //    };
   // async function getWeatherdata(){
   //    await api();
   //    await api();
   // }


   function getdata(dataid){
   return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log("data",dataid);
         resolve("success");
         },2000);
      });}

      // async function getalldata(){
      //    await getdata(1);
      //    await getdata(2);
      //    await getdata(3);
      //    await getdata(4);
         

      // }
      (async function getalldata(){
         await getdata(1);
         await getdata(2);
         await getdata(3);
         await getdata(4);
         

      })();