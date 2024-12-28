const name="khushi"
const repoCount=50
console.log(name+ repoCount+ "value");//outdated syntax
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName= new String('khushi-kb')
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'))
//slicing of string
const newString= gameName.substring(0,4)
console.log(newString);
//reverse of string, negative values
const anotherString=gameName.slice(-8,4)
console.log(anotherString)

//trim and replace
const newStringOne="   khushi   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url= "https://khushi.com/khushi%20khushi"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))
console.log(gameName.split('-'))