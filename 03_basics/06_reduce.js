/*
const array1=[1,2,3,4];
const initialValue=0;
const sumWithInitial=array1.reduce(
(accumulator,currentValue)=>accumulator+currentValue,
initiaValue
);

shuru me initial value 0, reduce method pe accumulator initially 0 hoga, jo initial value hai whi accumulator mei hoga pehli baar
current value array se milegi
dusri baar accumulator me result store hoga
and so on jo bhi sum ho rha wo accumumlator me aata jayega
*/


const myNums=[1,2,4]
const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc:${acc}and currval:${currval}`);
    return acc+currval
},0)//0 daala taki accumulator ko pta chle start kidhr se krna hai
console.log(myTotal);
//same ko agr hm arrow fxn me likhe
const mytotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal)

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python",
        price:999
    },
]

//shoppingCart.reduce(()=>(),0)
const pricetopay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay)