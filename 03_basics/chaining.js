//chaining is use of two to three methods continuously
const myNumers=[1,2,3,4,5,6,7,8,9,0,10]
const newNums=myNumers
.map((num)=>num*10)
.map((num)=>num+5)
.filter((num)=>num>=45)
console.log(newNums)