const output = document.querySelector('.output');
const ulList = document.querySelector('ul');

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.textContent = `${i+4}`;
    ulList.append(li);
}

console.log(ulList.childNodes);
console.log(ulList.children);

ulList.childNodes.forEach((val) => {
    //console.log(val);

})

for (let i = 0; i < ulList.children.length; i++) {

    const el = ulList.children[i];
    console.log(el.previousElementSibling);
    const prev = el.previousElementSibling;
    if (prev != null) {
        console.dir(el.parentElement);
        prev.style.color = 'red';
        prev.textContent += `<br>Parent : ${el.parentElement.tagName} <br>ParentNode : ${el.parentNode.tagName}`
    }
}
