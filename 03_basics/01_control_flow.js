//if
/*
if(true/condition){

}
*/


const  isUserloggedIn=true
if(isUserloggedIn){
    
}
//comaparison operator: <,>,<=,>=,==,!=
/*
if(3!=2){
}

"===": checks data type also
if(2==="2"){
console.log("executed")}

if(temperature===41){
console.log("less than 50");
}else{
  console.log("temperatue is greater than 50");
}


-------------
implicit scope agr parenthesis use ni krna to comma lgake
const balance=1000
if(balance>500)console.log("test"),console.log("test2");
but dont try this, it becomes unreadable

------------------if else if
if(balance<500){
console.log("less than 500");
}else if(balance<750){
console.log("less than 750");
}else if(balance<900){
console.log("less than 1200");
}


if(userLoggedIn && debitCard && 2==3)
{
console.log()
}

----------------------------------
*/
  syntax of switch */
/*switch(key){
case value:

    break;
}
----------------------
const month=3
switch(month){
case1:
console.log("january");
break;
case 2:
  console.log("fev");
  default:
    console.log("pta nhi")
    break;
}
---------------------

/*
   //Truthy and falsy value
   false,0,-0,BigInt,0n,"",undefined,Nan=>falsy Values
"0",'0','false',"",[],{},function(){}=>Truthy values*/
check array
if(userEmail.length===0)
{
console.log("array is empty")
}

//for empty object
 const emptyObj={}
 if(Object.keys(emptyObj).length===0){
 console.log("object is empty");
 }

 //Nullish coalescing operator(??):null undefined
 val1=5??10//checks safety for null/undefined or value
 val1=null??10??20 //agr null aagya to dusri value assign ho jayegi
 val1=undefined??15

 //ternary operator
 condition?true:false
 const iceTeaPrice=100
 iceTeaPrice>=80?console.log("less than 80"):console.log("more than 80")
 

