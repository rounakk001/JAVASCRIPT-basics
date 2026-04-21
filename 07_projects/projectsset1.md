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
