let a=10;
const b=20
var c=30
console.log(a)
console.log(b)
console.log(c)
//var ka scope loop se bahr aajata hai, so dont use it..AVOID VAR
//global scope
//local/BLOCK scope
//--------------------------------

//nested scope: function ke andr fxn
//closure used in javascript
//DOM:how html page is manipulated using javascript

//nested scope
function one(){
    const username="khushi"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()
//andr ka fxn bahr ke variables ko accesss kr skta pr bahr ka fxn andr wale fxns ke variables ko access ni kr skta
if(true){
    const username="khushi"
    if(username==="khushi"){
        const website="youtube"
        console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);

//++++++interesting+++++
function addone(num){
    return num+1
}
addone(5)

const addTwo=function(num){
    return num+2
}
addTwo(5)