const ele1 = document.querySelector('.myEle');
const btn = document.querySelector('button');
const myLinks = document.querySelectorAll('a');

console.log(ele1.classList);

/* ele1.classList.add('red');
ele1.classList.toggle('myEle');
ele1.classList.remove('red');
ele1.classList.toggle('blue'); */

console.log(ele1.getAttribute('class'));
ele1.setAttribute('class','red upper');
ele1.setAttribute('id','newID');
console.log(btn.getAttribute('disabled'));
btn.setAttribute('disabled',true);

console.log(ele1.id);
ele1.id = 'anotherValue';

myLinks.forEach((myLink)=>{
    //myLink.innerHTML += '<br>';
    if(myLink.classList.contains('red')){
        myLink.textContent += ' RED';
    }
    myLink.innerHTML += '<br>';
    myLink.setAttribute('target','_blank');
})





