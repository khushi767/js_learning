let myDate=new Date()
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString())
console.log(typeof myDate)

let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString());

let myCreateddate= new Date(2023,0,23,5,3)
console.log(myCreateddate.toLocaleString());

let dateinstring= new Date("01-14-2023")
console.log(dateinstring.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp) //in milliseconds
console.log(dateinstring.getTime()) 

console.log(Date.now())
console.log(Math.floor(Date.now()/1000)); //converting to milliseconds

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());