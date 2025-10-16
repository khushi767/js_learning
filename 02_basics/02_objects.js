//objects ko declare krne ke do tarike hai : lietrals ki trah ya constructor ki trah
//concept of singleton, jb constructor se bnate to ik hi object bnta wo singleton hai,mtlb ik hi object hai
//jb literals ki trah declare krte tb singleton nhi bnta hai

//Object.create()=>singleton method --constructor method
//we will talk about object literals here
///this is our object
//decleration of object

const mySym=Symbol("key1")
const JsUser={
name:"Khushi",
age:18,
mySym:"mykey1",
[mySym]:"yourkey",
location:"hamirpur",
email:"khushi@google.com",
isLoggedIn:false,
LastLogInDays:["Monday","Tuesday"]

} 
//accesing the object
console.log(JsUser.email)
console.log(JsUser["email"])//two ways to access objects
console.log(JsUser.mySym)
console.log(typeof JsUser.mySym)
console.log(JsUser[mySym]) //syntax for accessing symbol in javascript
console.log(typeof JsUser[mySym])


//object me hm keys aur value ke through define kr skte pr arrays me 0123 hi chlega
//object me keys hmesha string ki form me hoti hai
/*
agr hme symbol ko represnt krna object me to hm keys ko squre bracket me dalege to reperesnt in form of Symbol else it will be of string datatype

*/

//to overwrite a value
JsUser.email="khsuhi@chatgpt.com"
console.log(JsUser.email)
//we can also lock some values so that none can change it using freeze
//Object.freeze(JsUser)
JsUser.email="khushi@microsoft.com"//this wont be implement as object is freezed before
console.log(JsUser)

//Decleartion of function
JsUser.greeting=function(){
    console.log("Hello js user");
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greetingTwo())