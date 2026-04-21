const  myObject={
    js:'javascript',
    cpp: 'C++',
    rb:'ruby'
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming=["js","ruby","py","java","cpp"]


// for(const key in programming){
//     console.log(key)           -------ye 0 1 2 3 4 print krega basically index krega-----------
// }

for(const key in programming){
    //console.log(programming[key])      -------yaha pe value print hogi jo us particular index pe hoga---------
}

const map=new Map()//remembers the insertion order

// map.set('IN',"India")
// map.set('US',"America")

// console.log(map)

// for(const key in map){
//     console.log(key);      ----------map iterable nahi hai iskliye yaha kaam nhi krega-----------
// }