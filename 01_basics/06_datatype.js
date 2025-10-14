/*
two types of datatypes: primitive and non primitive or referenece type
primitive: 7types
primitive: call by value
string,number,boolean,null,undefined,symbol,bigInt

//reference type or non primitive type: array,objects,functions

JavaScript is a dynamically typed language, which means that variable types are determined at runtime, not compile time.
*/

//use of symbol
const id=Symbol('123')
const anotherId=Symbol('123')
console.log("khuh")
console.log(id===anotherId);

//array,object,functions decleration
const heros=["shaktiman","hero","dora"]
let myObj={
    name:"hitesh",
    age:22,
}
const myFunction= function(){
    console.log("Hello world");
}

console.log(myFunction)



//-----------------------------------------------------------
//STACK AND HEAP MEMORY
/*
all primitive types uses stack memory  //copy is passed
all non primitive or refrence uses heap memory  //refrence is passed

*/

let anothername="myYoutubename"
anothername="chaiaurcode"
console.log(anothername);
console.log(anothername);

let user={
    email:"user@google.com",
    upi:"user@4wd"
}