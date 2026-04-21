// singleton
//Object.create



//objects literals

const mySym=Symbol("key1")

const JsUser={
    name:"rounak",
    age:21,
   email:"rounak@google.com",
   [mySym]:"mykey1",
    location:"Jaipur",
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email) ;
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// JsUser.email="rounak@Chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email="rounak@Chatgdj.com"
 console.log(JsUser)


JsUser.greeting=function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




