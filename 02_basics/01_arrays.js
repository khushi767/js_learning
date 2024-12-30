const myArr=[0,1,2,3,4,5]
console.log(myArr)
console.log(myArr[0])

const myHeros=["shaktiman","nagraj"]
const myArr2= new Array(1,2,3,4)
console.log(myArr[1]);

//Array methods
//push ==adding an element in array
myArr.push(9)
myArr.push(8)
myArr.pop()
console.log(myArr)

myArr.unshift(0)//adds at starting of array and shifts all other values
myArr.shift()
console.log(myArr)


//------------------------
console.log(myArr.includes(8));
console.log(myArr.indexOf(3));

const newArr=myArr.join()
console.log(myArr);
console.log(newArr)
console.log(typeof newArr);
console.log("Khushi ")
//slice ,spice-----------------

console.log("A ",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);
const myn2=myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);

//Difference between slice and splice
//Slice: original array not modified,plus doesnt consider last value
//splice: original array is also modified, also considers last value

/////////////////////////////////////////////////////////////
const marvel_heroes=["thor","Ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);

const allheroes=marvel_heroes.concat(dc_heroes)
console.log(allheroes)

const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);


const third_Array=[1,2,4,[3,4,5],7,[6,7,[3,4]]]
const real_another_array=third_Array.flat(Infinity)
console.log(real_another_array);
//flat ==array ke andr ke array ko array as a one show krta
console.log(Array.isArray("Hitesh"))//check if it is aarray or not
console.log(Array.from("Hitesh"))// convert it into array
console.log(Array.from({name:"hitesh"}))//always specify make array from keys or value else u will get empty array


let score1=100
let score2=100
let score3=300
console.log(Array.of(score1,score2,score3));
