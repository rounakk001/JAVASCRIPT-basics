PROJECTS realted to DOM
----
project link    
----
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ync5wqb2?file=index.html)

# Solution Code

## Project 1 -Color Changer

```Javascript
const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');


buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    // console.log(e)
    // console.log(e.target)
     body.style.backgroundColor=e.target.id;
})
})




```

## Project2 -BMI Calcluator

``` javascript
const form=document.querySelector('form');
//ab isk eeche yaah declare krne par empty values le lega height hamara kyuki program run hote hi maang le rahe height hum chahte hai ki calculate dabane pr qo height aur weigth le
// const height=parseInt(document.querySelector('#height').value);

form.addEventListener('submit',function(e){
  e.preventDefault()
  //e.preventDefault() is used to stop the browser’s default form behavior (like submitting and reloading the page) so that your JavaScript can handle the form data and display results without refreshing the page.


  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const result=document.querySelector('#results');


  if(height==='' || height<0 || isNaN(height))
  {
    result.innerHTML=`please enter valid height`;
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML=`please enter valid weight`;
  }

  else{
  const bmi=(weight)/((height*height)/10000).toFixed(2);
  

  result.innerHTML=(`<span>${bmi}</span>`);
  }



})
```
## Project 3-Digital Clock
``` javascript
const clock=document.getElementById('clock');


setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString()
},1000)
```

## Project 4- Guess Number
``` javascript
const originalnumber=parseInt(Math.random()*100).toFixed(2);

const form=document.querySelector('form');
const userinput=document.querySelector('#guessField')
const submit=document.querySelector('#subt');
const resultparas=document.querySelector('.resultParas');
const lowOrHi=document.querySelector('.lowOrHi');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult')


let attempt=1;
let prevguess=[]

let playgame=true

const p=document.createElement('p');  //declare krna padta hai

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const  guess=parseInt(userinput.value)
    validateguess(guess)
  })
}

function validateguess(guess){
  if(guess<0)
  alert(`please enter number above zero`)
  else if(isNaN(guess)){
    alert(`please enter only numbers`)
  }
  else if(guess>100){
    alert(`please enter number below 100`)
  }
  else{
    prevguess.push(guess)
    displayguess(guess)
    if(attempt>=11){
      displaymessage(`GAME OVER DUDE. The original number was ${originalnumber}`)
    endgame()
    }
    else 
    {
      checkguess(guess);
    }
  }
}

function checkguess(guess){
  if(guess===originalnumber){
    displaymessage(`WOAH!! you guessed the number right`);
    endgame();
  }
  else if(guess<originalnumber)
  {
displaymessage(`too LOW`)
  }
  else if(guess>originalnumber){
    displaymessage(`too HIGH`)
  }
}

function displayguess(guess){
  userinput.value=''
  guessSlot.innerHTML+=`${guess}, `
  attempt++;
  remaining.innerHTML=`${11-attempt}`
}

function displaymessage(message){
  lowOrHi.innerHTML=`${message}`;
}

function endgame(){
  userinput.value=''
  userinput.setAttribute('disabled','');
  p.classList.add('button')
  p.innerHTML=`<h2 id="newgame">Start new GAME!!</h2`
  resultparas.appendChild(p);

  playgame=false;
  newgame();
}

function newgame(){
  const start=document.querySelector('#newgame');
  start.addEventListener('click',function(){
    startgame();
  })
}

function startgame(){
  const originalnumber =parseInt(Math.random()*100).toFixed(2)
  userinput.value=''

  prevguess=[]
  attempt=1

  userinput.removeAttribute('disabled')
  lowOrHi.innerHTML='';

  guessSlot.innerHTML=''
  remaining.innerHTML='10'
  
  resultparas.removeChild(p)

  playgame=true;
}
```

## Project 5 - press key and see magic

``` javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});
```

## Project 6 - Infinite colors

```javascript
      //generate random hex color code

      function randomcolor(){

      const letters ="0123456789ABCDEF"
      let color="#";

      for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)]
      }
      return color;

    }
      
      function startchangingcolor(){
        document.body.style.backgroundColor=randomcolor();
      }
      
      const startt=document.querySelector('#start');
      const stopp=document.querySelector('#stop');

      let interval;

      startt.addEventListener('click',function(){
        if(!interval)
          interval=setInterval(startchangingcolor,1000);
      })
      stopp.addEventListener('click',function(){
            clearInterval(interval);
            interval=null;
      })
      /*
intervalId ko null isliye karte hain:
clearInterval ke baad bhi variable me purani value (interval ID) rehti hai
null karne se pata chalta hai ki ab koi interval chal nahi raha (clean state)

if (!intervalId) safety check isliye lagate hain:
agar user multiple baar Start button click kare to multiple intervals start na ho
bina check ke har click par naya interval start ho jayega (bug + fast execution)

is check ki wajah se:
sirf ek hi interval ek time par chalega ✔️

flow:
Start → agar interval nahi chal raha to start karo
Stop → interval band karo + intervalId ko null kar do
*/
```

## Project 7 - Typing Effect
``` javascript
// typed text show karne ke liye span select kiya
const typedTextSpan = document.querySelector('.typed-text');

// cursor select kiya
const cursor = document.querySelector('.cursor');

// words ka array
const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

// typing function
function type() {

    // har word pe loop
    words.forEach((word, index) => {

        // naye word ke start pe purana text clear
        setTimeout(() => {
            typedTextSpan.innerHTML = "";
        }, index * 3000);

        // word ko letters me tod kar ek-ek letter type karo
        word.split('').forEach((letter, index1) => {

            setTimeout(() => {

                // letter add hota jayega
                typedTextSpan.innerHTML += letter;

            }, (index * 3000) + (index1 * 200));

        });

        // word complete hone ke baad erase
        setTimeout(() => {
            erase();
        }, (index * 3000) + (word.length * 200) + 500);

    });

    // jab saare words complete ho jayein to dubara type start
    setTimeout(() => {
        type();
    }, words.length * 3000);

}



// erase function
function erase() {

    // current text store
    let text = typedTextSpan.innerHTML;

    // har 100ms me ek letter delete
    const interval = setInterval(() => {

        // last letter remove
        text = text.slice(0, -1);

        // updated text show
        typedTextSpan.innerHTML = text;

        // text khatam to stop
        if (text.length === 0) {
            clearInterval(interval);
        }

    }, 100);

}



// start typing
type();
```  
## Project 8 - Emoji Changer
``` javascript
const btn = document.querySelector('#emoji');
const emojis = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '🥺',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🥴',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🥰',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '🥲',
  '😃',
  '😁',
  '😬',
];


btn.addEventListener('mouseenter',function(){
    changeEmoji();
})

function changeEmoji(){

  const randomIndex = Math.floor(Math.random() * emojis.length);

  btn.textContent=emojis[randomIndex]

}
```
 
## Project 9 - Text Editor
``` javascript
const output = document.querySelector('#output-field');

const uppercase = document.querySelector('.btn.uppercase');
const lowercase = document.querySelector('.btn.lowercase');
const capital = document.querySelector('.btn.capitalize');
const bold = document.querySelector('.btn.bold');
const italic = document.querySelector('.btn.italic');
const underline = document.querySelector('.btn.underline');

// UPPERCASE
uppercase.addEventListener('click', function () {
  const input = document.getElementById('input-field').value;

  output.style.fontWeight = "normal";
  output.style.fontStyle = "normal";
  output.style.textDecoration = "none";

  output.innerHTML = input.toUpperCase();
});

// LOWERCASE
lowercase.addEventListener('click', function () {
  const input = document.getElementById('input-field').value;

  output.style.fontWeight = "normal";
  output.style.fontStyle = "normal";
  output.style.textDecoration = "none";

  output.innerHTML = input.toLowerCase();
});

// CAPITALIZE EACH WORD
capital.addEventListener('click', function () {
  const input = document.getElementById('input-field').value;

  let res = "";

  if (input.length > 0) {
    res += input.charAt(0).toUpperCase();
  }

  for (let i = 1; i < input.length; i++) {
    if (input.charAt(i) === ' ') {
      res += " ";
      if (i + 1 < input.length) {
        res += input.charAt(i + 1).toUpperCase();
        i++;
      }
    } else {
      res += input.charAt(i);
    }
  }

  output.style.fontWeight = "normal";
  output.style.fontStyle = "normal";
  output.style.textDecoration = "none";

  output.innerHTML = res;
});

// BOLD
bold.addEventListener('click', function () {
  const input = document.getElementById('input-field').value;

  output.innerHTML = input;
  output.style.fontWeight = "bold";
});

// ITALIC
italic.addEventListener('click', function () {
  const input = document.getElementById('input-field').value;

  output.innerHTML = input;
  output.style.fontStyle = "italic";
});

// UNDERLINE
underline.addEventListener('click', function () {
  const input = document.getElementById('input-field').value;

  output.innerHTML = input;
  output.style.textDecoration = "underline";
});
//Optimsed Code Below

/*
const output = document.querySelector("#output-field");
const inputField = document.getElementById("input-field");

// reusable function
function updateOutput(transform, style = {}) {
  const input = inputField.value;

  // text transform
  output.innerHTML = transform(input);

  // reset styles
  output.style.fontWeight = "normal";
  output.style.fontStyle = "normal";
  output.style.textDecoration = "none";

  // apply new styles
  Object.assign(output.style, style);
}

// button selectors + functionality
document.querySelector(".btn.uppercase").onclick = () =>
  updateOutput(text => text.toUpperCase());

document.querySelector(".btn.lowercase").onclick = () =>
  updateOutput(text => text.toLowerCase());

document.querySelector(".btn.capitalize").onclick = () =>
  updateOutput(text =>
    text
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );

document.querySelector(".btn.bold").onclick = () =>
  updateOutput(text => text, { fontWeight: "bold" });

document.querySelector(".btn.italic").onclick = () =>
  updateOutput(text => text, { fontStyle: "italic" });

document.querySelector(".btn.underline").onclick = () =>
  updateOutput(text => text, { textDecoration: "underline" });
```
## Project 10 - Random Image Generator
``` javascript
// Use this working random image source:
const baseURL = 'https://picsum.photos/';

// Full example:
const container = document.querySelector('.content');
const rows = 7;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');

  // picsum uses / instead of x
  img.src = `${baseURL}${randomNumber()}/${randomNumber()}`;

  container.appendChild(img);
}

function randomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
```
## Project 11 - Random JOKES
``` javascript
const btn=document.querySelector('#getJoke');
const display=document.getElementById('display-joke')

btn.addEventListener('click',function(){

  fetch('https://api.chucknorris.io/jokes/random')
  .then((response)=>{
   return  response.json();
  })
  .then((data)=>{
    display.innerText=data.value;
  })
  .catch((error)=>{
    console.log('error');
  })
})



//XMLHttpRequest()
// btn.addEventListener('click',function(){

//   const requesturl = 'https://api.chucknorris.io/jokes/random';
//   const xhr=new XMLHttpRequest();

//   xhr.open('GET',requesturl);

//   xhr.onreadystatechange=function(){
//       if(xhr.readyState===4){
        
//         const data=JSON.parse(xhr.responseText);

//         document.getElementById('display-joke').innerText=data.value
//       }
//   }
//   xhr.send();
// })
 

// handle this end point with XMLHttpRequest

// handle this end point with promises

// handle the case of race condition
```




