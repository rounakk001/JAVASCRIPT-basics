// let myname="Rounak   "

// console.log(myname.length)
// //now if you want to return true length 
// console.log(myname.trim().length) //low iq waali cheezein


// console.log(myname.truelength); //mai chahta hu ki aise ek method  rahe truelength naam ka 

myheroes=["Thor","spiderman"]


let heroPower={
    thor:"Hammer",
    spiderman:"sling",

    getspidypower:function(){
        console.log(`the spider power is : ${this.spiderman}`);
    }

}
/*
function----------object---------null
array-------------object---------null
string------------object---------null
*/

Object.prototype.rounak=function(){   /*hmne yaha pe high level heirarchy ki hai hmne sidha object pe hi insert kra diya hai   
                                      taaki string ho ya array ho khud koi object ho to sb pr ye method rahe*/
    console.log(`Rounak is inserted in every object`);
}


Array.prototype.sayrounak=function(){      //yaha pe sayrounak sirf array ke liye insert kar raha hu
    console.log(`ky bhai kyaa haal hai`);
}


myheroes.rounak();   //ab dekho object me hi insert kara diya hai isliye array me bhi wo function aa gaya hai


heroPower.rounak();

myheroes.sayrounak();

// heroPower.sayrounak(); //ab yaha pe error aayega kyuki maine  sirf array ke liye kiya tha aur pr function wagaora ke liye nahi hai access

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);    //yaha pe this me anotherusername ka refernce hai gar "hitesh" pass hoga to hitesh  aayega
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh   ".trueLength()
"iceTea".trueLength()