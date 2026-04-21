//const tinderUser=new Object()  -> singleton

const tinderUser={}   //->non singleton

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedin=false


//console.log(tinderUser);


const regularUser={
    email:"rounak@gmail.com",
    name:"rounak",
   fullname:{
    userfullname:{
        firstname:"Rounak",
        lastname:"Singh"
    }
   }
}

//console.log(regularUser.fullname.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}


// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)   Objects.assign(target,source)

const obj3={...obj1, ...obj2}

console.log(obj3)


const users=[
    {
   id: 1,
    email:"r@gmail.com"
    },
    
    {
        id:2,
        email:"r1@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedin'))


const course={
    courseName:"JS",
    price:"999",
    courseInstructor:"rounak"
}


//course.courseInstructor

const {courseInstructor:instructor}= course

//console.log(courseInstructor)

console.log(instructor);


// {
//     "name":"rounak",
//     "coursename":"js in hindi",
//     "price":"free"

// }

[
    {},
    {},
    {}
]