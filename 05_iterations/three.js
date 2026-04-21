//for of 
//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

// for(const iterator of object ){

// }


for(const num of arr){
    console.log(num);
}

const greetings="Hello World!"
for(const greet of greetings){
    if(greet==' ')
        break
    console.log("each char is "+greet)
}

//Maps
//key value pair store krta hai
//dupicates allowed nahi hai


const map=new Map()//remembers the insertion order
   
map.set('IN',"India")
map.set('US',"America")
map.set('IN',"kkd") //yaha pe unique key hi rahegi ek hi key ki do value nhi ho sakti hai


console.log(map)

for(const [key,value] of map){
    console.log(key,value);
}


//           ======object is not iterable====

// const myObject={
//     'game1':'NFS',
//     'game2':"RDR"   ======object is not iterable====
// }

// for(const [key,value] of myObject){
//     console.log(key,value);
// }

