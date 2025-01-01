//function declaration
function saymyname(){
    console.log("k"),
    console.log("h"),
    console.log("u"),
    console.log("s")
}
saymyname()

function addTwoNumbers(number1,number2){//parameters are passed
    console.log(number1+number2);
}
addTwoNumbers()
addTwoNumbers(2,5)//while printing we pass values is called argument and when we define in function is called parameters
addTwoNumbers(2,"4")
addTwoNumbers(2,"a")
addTwoNumbers(2,null)
addTwoNumbers(2,NaN)

const result=addTwoNumbers(3,5)//we cant store it only prints in console it wont return for that use return
console.log("result is",result);

function twonumbers(num1,num2){
    let result=num1+num2
    return result
    //or return num1+num2
}
const results=twonumbers(3,2)
console.log("sum is",results)

function loginUserMessage(username) {
    if(username===undefined){
        console.log("please enter a username")
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("khushi"));
console.log(loginUserMessage("k"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())


//-----------------where you dont know about no of arguments which will be passed such as in shopping cart 
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(100,200,300))

function calculatecartprice(...num1){//...is called rest operator return va,ues in bundles
    return num1
}
console.log(calculatecartprice(100,200,300))

//-------------using object in function
const user={
    username:"khushi",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)
//or u can pass likethis also
handleObject({
    username:"khushi",
    price:200
})

const myNewArray=[200,400,800]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,899]));