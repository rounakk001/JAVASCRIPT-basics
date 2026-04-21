const coding =["js","ruby","java","python","cpp"]

// const values=coding.forEach( (item) => {
//     console.log(item)
//     return item          yaha pe return krne ka koi faaida nhi hai kyuki values me nhi jaayega 
// })


//     console.log(values);

const values = coding.map((item) => {     //map basically ek naye array me store kr leta hai aur ssaath hi saath iterate bhi krta hai
    //console.log(item)
    return item   // ab ye values array me store hoga
})

console.log(values)

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔁 forEach vs 🗺️ map

forEach():
✔ Iterate karta hai
❌ Return value store nahi karta
❌ Always returns undefined
👉 Use: Side effects (console, API call, etc.)

map():
✔ Iterate karta hai
👉 Use: Transforming data

🧠 Shortcut:
forEach → "Do something"
map     → "Transform + Return"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

const myNums=[1,2,3,4,5,6,7,8,9,10]

//const newNum=myNums.filter((num)=> {   scope use krenge to return use krna padgega 
  //    return  num>4
//}) //filter function values return krta hai aur foreach nhi krta hai



// const newNums=[]

// myNums.forEach( (num) => {
//     if(num>4)
//         newNums.push(num)

// })

// console.log(newNums)

const books = [
  { title: "The Lost World", genre: "fiction", publication: 2014 },
  { title: "Data Structures Made Easy", genre: "education", publication: 2018 },
  { title: "The Silent Night", genre: "mystery", publication: 2012 },
  { title: "JavaScript Mastery", genre: "technology", publication: 2021 },
  { title: "History of India", genre: "history", publication: 2009 },
  { title: "The Power Within", genre: "self-help", publication: 2016 },
  { title: "Artificial Intelligence Basics", genre: "technology", publication: 2020 },
  { title: "Love Beyond Time", genre: "romance", publication: 2011 },
  { title: "The Last Warrior", genre: "history", publication: 2015 },
  { title: "Space and Beyond", genre: "history", publication: 2019 }
];


const  userBooks=books.filter((bk)=>(bk.genre=="history" && bk.publication>2010))

console.log(userBooks)

