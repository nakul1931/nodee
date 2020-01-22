const http = require('http');


express = express()

// // const nakul = (a,b) =>{
// //     return a+b;

// // }  
// console.log(nakul(1,2));


// function nakul (a,b){
//     return a+b+1;
// }
const person = {
    name : 'Nakul',
    age : 19,
    greet: function(){
        console.log("My name is " + this.name + " and my age is " + this.age);
    }
}
console.log(person.age);
person.greet();