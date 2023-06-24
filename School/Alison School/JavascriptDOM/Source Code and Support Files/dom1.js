const myEle1 = document.querySelector('.myEle');
const myObj = {"html":{"body":{"div":"Hello"}}}
console.dir(document);
myEle1.textContent = "hello world";

const eles = document.querySelectorAll('.myEle');
eles.forEach((el,index)=>{
    console.log(el.textContent);
    el.textContent = `Hello World ${index+1}`;
})
