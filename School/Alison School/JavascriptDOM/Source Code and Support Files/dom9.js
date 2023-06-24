const output = document.querySelector('.output');
const h1 = document.createElement('h1');
output.append(h1);
document.addEventListener('keydown',(e)=>{
    h1.innerHTML += e.key;
})
document.addEventListener('keyup',(e)=>{
    console.log(e.key);
})

for(let i=0;i<5;i++){
    const ele = document.createElement('input');
    output.append(ele);
    ele.classList.add('box');
    ele.setAttribute('type','text');
    ele.setAttribute('name','input'+i);
    ele.addEventListener('focus',(e)=>{
        ele.style.backgroundColor = 'red';
        ele.style.color = 'white';
        ele.style.border = '1px solid black';
    })
    ele.addEventListener('blur',(e)=>{
        ele.style.backgroundColor = 'white';
        ele.style.color = 'black';
    })
    ele.addEventListener('change',(e)=>{
        
        ele.style.border = '1px solid red';
    })
    ele.addEventListener('keyup',(e)=>{
        console.log(e.key);
        if(e.key =='Enter'){
            console.log(ele.value);

        }
    })
}