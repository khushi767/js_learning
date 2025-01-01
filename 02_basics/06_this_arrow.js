//this -> referes current context
const user={
    username:"khushi",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this)

//node environment ke andr this empty object ko refer krta,but object me current context refer krta, aur sirf object me hi chlega fxns me kaam nhi krega


function chai(){
    console.log(this);
}
chai()

function chaii(){
    let username="kkhushi"
    console.log(this.username)
}
chaii()

const chaiii= function(){
    let username="khushi"
    console.log(this.username);
}
chaiii()

const chay=()=>{
    let username="khushi"
    console.log(this.username)
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