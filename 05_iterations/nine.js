const myNums=[1,2,3]


// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval
// },0)


const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)


console.log(myTotal)

const  shoppingCart=[
    {
        itemName:"js Course",
        price:2999
    },
    {
        itemName:"react",
        price:3000
    },{
        itemName:"Node js",
        price:4000
    }
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(priceToPay)