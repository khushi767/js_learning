
//const tinderUser= new Object()//singleton method to declare object
const tinderUser={}//literal method to declare a object --non singleton object
tinderUser.id="123abc"
tinderUser.name="khsuhi"
tinderUser.isLoggedIn=false
console.log(tinderUser);


//object inside an object
const regularUser={
    email:"khushi@gmail.com",
    fullname:{
        userfullname:{
            firstname:"khushi",
            lastname:"kumari"
        }
    }
}
console.log(regularUser.email)
console.log(regularUser.fullname)
console.log(regularUser.fullname?.userfullname.firstname)//question is for protection if full name dont exist

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}//dont add two objects or array likthis else you will get object inside object use concat
const obj3=Object.assign(obj1,obj2)
console.log(obj3)
const obj4=Object.assign({},obj1,obj2)//usually preferred    will give same result as above but it is better, guarantees {}is target and others are source
console.log(obj4)

//simple method
const objj3={...obj1,...obj2} //using spread operator used most of time
console.log(objj3)

//jb database se values aayegi database se array of users/objects aayega
//output will be an array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) //will give key value pair

//to check if these properties/values exist in object or not to prevent system crash we can use this
console.log(tinderUser.hasOwnProperty('isLogged'));


//destructuring of objects
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"khushi"
}
//course{courseInstructor}
const {courseInstructor}=course
//or const {courseInstructor: instructor}=course , both will give same output
console.log(courseInstructor);


/*

Destructuring is done to make code more concise and readable by extracting values from arrays or objects into distinct variables in a single operation. It helps to avoid writing multiple lines to access properties or elements and can be used to simplify function arguments, swap variables, and set default values. 

//in react 
const navbar=()=>{

}
navbar(company="hitesh")
*/

/*api call json format me aati hai jisme key or value dono string ki form me hote hai
apn ko udhr se extract krna hai
kbhi kbhi array ki form me bhi milti hai=> array of objects

--json form
{
"name":"khush";
"coursename":"js in hindi";
"price":"free";
}
-- array of objects form
[
{},
{}
]*/