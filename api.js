const facts=document.querySelector("#fact");
const btn=document.querySelector("#btn");

const URL="https://cat-fact.herokuapp.com/facts";
const getfacts=async()=>{
console.log("getting data..")
let response=await fetch(URL);
console.log(response);
let data =await response.json();
facts.innerText=data[1].text;
}

//promise
// function getfacts(){
//    fetch(URL)
//    .then(Response=>{
//       return Response.json()
//    }).then((data)=>{
//       console.log(data);
//       facts.innerText=data[4].text;
//    })
// }




btn.addEventListener("click",getfacts)