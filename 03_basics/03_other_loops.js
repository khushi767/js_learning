//array specific loops

//for of loops
//["","",""]
//[{},{},{}] --from api calls we can get array of object
const arr=[1,2,3,4,5]
//for(const iterator of object){

//}
for(const num of arr){              //idhr size, decleration vgera kuj define ni krna pdega
    console.log(num);
}
const greetings="hello world"
for( const greet of greetings){
    console.log(`each char is ${greet}`)
}
//maps--known to have unique values
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")
console.log(map);
for(const [key,value]of map){
    console.log(key,':-',value);
}

const myObject={
    game1:'nfs',
    game2:'spiderman'
}
//to iterrate objects for in loop is used
//for(const key in object){

//}

//for in loop is used for objects
for (const key in myObject){
    console.log(key);
}

for(const key in myObject){
    console.log(`${key}shortcut is for ${myObject[key]}`);
}
//for in loop in array
const programming=["js","rb","py"]
for(const key in programming){
    console.log(programming[key]);//aise hm keys ki value print kr skte
    console.log(key);//idhr key print ho jayega
}
//for of loop me values aati hai, for in loop me keys aati hai,map is non iteratable udhr loop ni lgega


//FOR EACH LOOP
/*
coding.forEach( function(){  syntax of for each loop
    //conditions
})*/
const coding=["js","ruby","python","c++"]
coding.forEach(  function (item){
    console.log(item)
})

coding.forEach((item)=>{  //for each loop using arrow key
    console.log(item)
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe) //refernce deke print krwadiya fxn ko

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"

    },
    {
        languageName:"java",
        languageFileName:"java",
    },
    {
        languageName:"pyhton",
        languageFileName:"py"
    },
]
myCCoding.forEach( (item)=>{
    console.log(item.languageName);
})

//array of object ke andr ki koi value nikalni ho to
//for each koi value retuen nhi krta ye hrr baar undefined dega

