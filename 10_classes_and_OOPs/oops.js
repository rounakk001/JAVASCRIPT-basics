// let user = {
//     username: "Rounak",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function() {
//       // Simulate fetching user details from a database
//       //console.log("Go user details from database");

//       console.log(`Username: ${this.username}`);  //yaha this context bata raha username ka 
//       console.log(this); // ye pura object hi print kara dega
//     }
//   };

//   console.log(user.username)

//   user.getUserDetails();
//   console.log(this) //ye empty parameter print karyega --{}


// const PromiseOne=new Promise()
// const date=new Date()  //-----new is constructor function --ek hi object literaal se multiple instance bana sako


function user(username,logincount,isLoggedIn){
  this.username=username;
  this.logincount=logincount;
  this.isloggedIn=isLoggedIn;

  this.greeting=function(){
    console.log(`hello ${this.username}`);
  }

  return this
}

const user1=user("rounak",12,false)
const user2=user("chaiwithcode",11,true);

console.log(user1); //yaha pe new nhi laganae se user2 over ride kr de raha user1 ko tabhi hum new() ka use krte hai

const user3=new user("rounak",12,false)
const user4=new user("chaiwithcode",11,true);
console.log(user3);

console.log(user3.constructor); //yaha constructor khud ko hi return krta hai (constructor khud ko call krta hai )

