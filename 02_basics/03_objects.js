
//const tinderUser= new Object()//singleton method to declare object
const tinderUser={}//literal method to declare a object
tinderUser.id="123abc"
tinderUser.name="khsuhi"
tinderUser.isLoggedIn=false
console.log(tinderUser);

const regularUser={
    email:"khushi@gmail.com",
    fullname:{
        userfullname:{
            firstname:"khushi",
            lastname:"kumari"
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname?.userfullname.firstname)//question is for protection if full name dont exist

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}//dont add two objects or array likthis else you will get object inside object use concat
const obj3=Object.assign(obj1,obj2)
console.log(obj3)
const obj4=Object.assign({},obj1,obj2)//usually preferred
console.log(obj4)

//simple method
const objj3={...obj1,...obj2}
console.log(objj3)

//jb database se values aayegi
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

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