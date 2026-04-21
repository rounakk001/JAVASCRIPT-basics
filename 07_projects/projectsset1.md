PROJECTS realted to DOM
----
project link    
----
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ync5wqb2?file=index.html)

# Solution Code

## Project 1

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
