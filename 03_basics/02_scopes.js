let a=100
//var c=300

if(true){
let a=10
const b=20
// console.log("INNER: ",a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        console.log(username);
    }
   // console.log(website);
    
    two()

}


//one()

if(true){
    const username="rounak"
    if(username=="rounak"){
        const website =" youtube"
        console.log(username+website);  
    }
   
    // console.log(website);
    
}

// console.log(username);


// +++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++



addone(5)   //here no error as we are only declaring the function

function addone(num){
    return num + 1
}


//addTwo(5)  => it will give error because in addtwo we are holding the result

const addTwo=function(num){
    return num+2
}

addTwo(5)