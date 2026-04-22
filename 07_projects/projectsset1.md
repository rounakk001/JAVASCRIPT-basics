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