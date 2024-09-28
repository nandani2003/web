//PROTOTYPE
// const employee={
//    calctax(){
//       console.log("your tax is 10%");
//    },
// };

// const tanu={
//    salary:50000,
//    calctax(){
//       console.log("your tax is 20%");
//       //if object and protoype have same method object's method will be used.
//    },
// };
// tanu.__proto__=employee;

//CLASSES
// class toyotacar{
//    constructor(brand,mileage){
//       console.log("you are making new object");
//       this.brand=brand;
//       this.mileage=mileage;
//    }
//    start(){
//       console.log("start");
//    }
//    stop
//    (){
//       console.log("stop");
//    }}

// let fortuner=new toyotacar("mahindra",60);
// let nexa=new  toyotacar("nexa",80);

//INHERITENCE
// class person{
//    constructor(name){
//       // console.log("enter parent constructor");
//       this.species="homo sapiens";
//       this.name=name;
//    }
//    sleep(){
//       console.log("sleep");
//    }
//    eat(){
//       console.log("sleep");
//    }
// }

// class enginner extends person{
//    constructor(name){
//       // console.log("enter child constructor");
//       super(name);
//       console.log("exit child constructor");
//    }
   
//    solve(){
//       super.eat();
//       console.log("you can solve problems");
//    }
// }
// let tanu=new enginner("nandani");

//practice
let DATA="Secert data";

class user{  
   constructor(name,email){
      this.name=name;
      this.email=email;
   }
   viewdata(){
      console.log("data = ",DATA);
   }

}
class admin extends user{
   constructor(name,email){
   super(name,email);}
editdata(){
   DATA="some new info";
}
}




const obj1=new user("nandani","nc@314gmail.com");
const obj2=new user("ngjhg","nmkc@314gmail.com");
let admin1=new admin("admin","clgCEO")