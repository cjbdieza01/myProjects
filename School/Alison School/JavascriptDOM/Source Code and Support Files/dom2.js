const output = document.querySelector('#myId');
const html = "<h1>Hello World</h1>";
output.textContent = html;
output.innerHTML = html;

output.style.color = 'red';
output.style.backgroundColor = 'yellow';
output.style.border = '5px solid black';
output.style.borderRadius = '25px';

const el = output.style;
console.log(el);
el.textAlign = 'center';
el.textTransform = 'uppercase';

el.margin = '25px';
