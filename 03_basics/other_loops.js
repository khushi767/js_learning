//for of loops
//["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5]
//for(const iterator of object){

//}
for(const num of arr){
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
for (const key in myObject){
    console.log(key);
}

for(const key in myObject){
    console.log(`${key}shortcut is for ${myObject[key]}`);
}

const programming=["js","rb","py"]
for(const key in programming){
    console.log(programming[key]);
}
//for of loop me values aati hai, for in loop me keys aati hai,map is non iteratable udhr loop ni lgega


//FOR EACH LOOP
const coding=["js","ruby","python","c++"]
coding.forEach(  function (item){
    console.log(item)
})

coding.forEach((item)=>{
    console.log(item)
})
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

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
myCCoding.forEach((item)=>{
    console.log(item.languageName);
})