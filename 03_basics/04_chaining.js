//chaining is use of two to three methods continuously
const myNumers=[1,2,3,4,5,6,7,8,9,0,10]
const newNums=myNumers
.map((num)=>num*10) //iska result second chain me pass hoga
.map((num)=>num+5) 
.filter((num)=>num>=45)//upr wale ka result idhr pass hoga
console.log(newNums)


const mynumbers=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNumers.filter((num)=>num>4)
console.log(newNums);

/* this will give empty array, 
{} lgake hmne scope start krdia, aur jb scope start kiya to hme return keyword likhna pdega nhi to blank milega
const newnums=mynumbers.filter( (num)=>{
    num>4
})
*/
const newnums=mynumbers.filter( (num)=>{
    return num>4
})

myNumers.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)