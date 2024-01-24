const myEle1 = document.querySelector('.myEle'); 
const myObj = {"html":{"body":{"div": "Hello"}}}
console.dir(document);
myEle1.textContent = 'Hello1';
const eles = document.querySelectorAll('.myEle');
console.log(eles[0]);
console.log(eles[1]);

eles.forEach((el,index) => {
    console.log(el);
    el.textContent = `Hello World ${index}`;
})