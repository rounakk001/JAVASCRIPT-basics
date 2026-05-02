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


