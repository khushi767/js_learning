//for loop
for(let index=0;index<10;index++){
    const element=index;
    console.log(element);
}
//console.log(element)
for(let i=0;i<=9;i++){
    const element=i;
    if(element==5){
        console.log("5 is best number");
    }
    console.log(element);
}

for(let i=0;i<=10;i++){
    console.log(`outer loop value:${i}`);
    for(let j=0;j<=10;j++){
        console.log(`inner loop value ${j}and inner loop ${i}`);
    }
}

let myArray=["flash","batman","superman"]
console.log(myArray.length);
for(let index=0;index<myArray.length;index++){
    const element=myArray[index];
    console.log(element);
}

for(let index=1;index<=20;index++){
    if(index==5){
        console.log(`detected 5`);
        continue
        //break;
    }
    console.log(`value of i is ${index}`);
}

//WHILE LOOOPS
/*while(condition){

}
*/
let index=0;
while(index<=10){
    console.log(`value of index is ${index}`);
    index=index+2
}

let myArrray=['flash','batman','superman']
let arrr=0
while(arrr<myArrray){
    console.log(`value is ${myArrray[arr]}`);
    arr=arr+1;
}


//DO WHILE LOOOP
/*
do{
}while(condition);
*/
let score=1;
do{
    console.log(`score is ${score}`);
    score++;
}while(score<=10)