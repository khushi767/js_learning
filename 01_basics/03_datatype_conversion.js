let score="33"

console.log(typeof score);
console.log(typeof(score))

let valueInNumber=Number(score)
console.log(typeof valueInNumber);

/*
33abc==NaN
null ==0
undefined==NaN
Boolean true false ==0/1

*/
let isLoggedIn=1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
/*
if boolean=""==false
if boolean="kjis"==true
*/
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)