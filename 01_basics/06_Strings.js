const name="rounak"
const repoCount=50

//console.log(name+repoCount+" Value"); => outdated

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const godName= new String("Shiva-s-com")

console.log(godName[0]);

// console.log(godName.__proto__);


// console.log(godName.length)
console.log(godName.toUpperCase()) //charAt bhi hota hai,indexOf 


const newString=godName.substring(0,4);
console.log(newString);

const anotherString=godName.slice(-5,4);
console.log(anotherString);


const newStringOne="   rounak   "
console.log(newStringOne.trim())

const url="https://rounak.com/rounak%20singh"


console.log(url.replace('%20','-'));
console.log(url.includes('djdj'));


console.log(godName.split('-'))


