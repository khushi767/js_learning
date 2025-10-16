//ES6: came in 2015 , brought arrow fxn, this fxn which refers to current context

//this -> referes current context
const user={
    username:"khushi",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this) //will print current context
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this)   //will give {}, because it is empty
// in browser console.log(this)-> it will give window , but in nodejs,deno,bun,etc. it will give empty parenthesis
//browser ke andr jo global event run krta hai wo windows object hai

//node environment ke andr this empty object ko refer krta,but object me current context refer krta, aur sirf object me hi chlega fxns me kaam nhi krega


function chai(){
    console.log(this);  //fxn ke andr this ko print krte hai node environment ke andr, to global value, microtask,idle time vgera kaafi values milti hai jo hm access kr skte hai
    
}
chai()

function chaii(){
    let username="kkhushi"
    console.log(this.username)  //idhr undefined aayega,  to mtlb fxns ke andr hm this use nhi kr skte sirf object ma use kr skte hai
}
chaii()

const chaiii= function(){
    let username="khushi"
    console.log(this.username); //undefined aayega
}
chaiii()

//es6 me aaya fxn keyword htado, parenthesis ki jgah arrow fxn use krlo
const chay=()=>{
    let username="khushi"
    console.log(this.username) //idhr empty parenthesis aayega
    console.log()
}
chay()

//---------------------ARROW FXNS
//()=>{} ,basic syntax
const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4))

//implicit return==maine maanliya aapko likhne ki jroorat nhi
const addTwoo=(num1,num2)=> num1+num2
//or
const addTTwo=(num1,num2)=>(num1+num2)
console.log(addTTwo(4,5))
console.log(addTwoo(3,4))
//curly braces me likha to return keyword ni likhna pdega, () use kiya to return ni use krna pdega

//object ko hm curly braces me return kr hi ni skte hme parenthesis me daalna hi pdega
const addTtwo=(num1,num2)=>({username:"hitesh"}) //yha error ni aayega
const addtwo=(num1,num2)=>{username:"hites"}//idhr undefined aajayega kyoki hm object curly braces me ni return kr skte
