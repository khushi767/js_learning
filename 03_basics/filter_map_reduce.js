const coding=["js","ruby","java","python","cpp","swift"]
const values=coding.forEach((item)=>{
    console.log(item);
    return item;
})
console.log(values)

//for each kuj bhi return nhi krta, isliye idhr undefined aayega

const myNums=[1,2,3,4,5,6,7,8,9,10]
//basics of filters
const newNums=myNums.filter((num)=>num>4)
console.log(newNums);
const scopesNums=[1,2,4,5,6,78,87,6]
const scopecheck=scopesNums.filter((num)=>{
    return num>4
})
console.log(scopecheck)
//you can print using for each loop like this
const oldNums=[]
myNums.forEach((num)=>{
    if(num>4){
        oldNums.push(num)
    }
})
console.log(oldNums)

const books=[
    {title:'Book One',genre:'Fiction',publish:1981,edition:2004},
    {title:'Book Two',genre:'Non-Fiction',publish:1992,edition:2008},
    {title:'Book Three',genre:'History',publish:1999,edition:2008},
    {title:'Book Four',genre:'Non-Fiction',publish:1989,edition:2010}, 
];
let userBooks=books.filter((bk)=>bk.genre==='History')
console.log(userBooks)

userBooks=books.filter((bk)=>{return bk.edition>=2000})
console.log(userBooks)

const mynums=[1,2,3,5,6,7,8,8]
const newnumb=mynums.map((num)=> num+10)
console.log(newnumb)
const newnum=mynums.map((num)=>{
    return num+10
})
console.log(newnum)