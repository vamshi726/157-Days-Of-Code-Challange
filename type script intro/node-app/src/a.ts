//imp interview question:
// what is difference between type and interface

type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;
  
  const teamLead: TeamLead = {
    name: "Vamshi",
    startDate: new Date(),
    department: "Software Engineer"
  };
  


// type GreetArg = number|string

// function greet (id:GreetArg){

// }

// greet(1)
// greet("1")



















// type User = {
// 	firstName: "harkirat",
// 	lastName: "singh",
// 	email: "email@gmail.com",   
// 	age: 21
// }


// interface User2{
//     firstName: string,
//     lastName:string,
//     age:number
// }



 
// function isLegal(user:User){
    
// }










// interface User{
//     firstName: string,
//     lastName: string,
//     age: number
//     email?:string,
// };

// function isLegal(user:User){
//     if(user.age>18){
//         return true;
//     }else{
//         return false
//     }
// }

// function greet(user:User){
//     console.log("hi there "+ user.firstName)
// }

// const val=isLegal({
//     firstName:"vamshi",
//     lastName: "m",
//     age:20,
    
// })

// console.log(val);
