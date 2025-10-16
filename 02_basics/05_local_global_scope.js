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
    //console.log(website); ye ni chlega due to local scope
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
console.log(addone(5))//idhr error in aayega
function addone(num){
    return num+1
}
addone(5)



//neeche wale mai error aayega
console.log(addTwo(6))//idhr error aayega kyoki hm decleration se pehle access krne ki koshish krr rhe,kyoki hm declerayion ke sath variable mai hold kr rhe
const addTwo=function(num){   //it can also be called as expression, hai to fxn hi but variable value store kr rha hai
    return num+2
}
addTwo(5)