const myNums=[1,2,4]
const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc:${acc}and currval:${currval}`);
    return acc+currval
},0)
console.log(myTotal);

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