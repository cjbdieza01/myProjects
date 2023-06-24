const output = document.querySelector('.output');
const game = {'wheel':0,'mouseover':0,'mouseenter':0,'mouseout':0,'mousemove':0,};

for(const prop in game){
    console.log(prop ,game[prop]);
    const el = document.createElement('div');
    game[prop] = {val:0,el:el};
    const span = document.createElement('span');
    el.textContent = prop + ': ';
    span.textContent = 0;
    output.append(el);
    el.append(span);
}

const val1 = document.querySelector('.test');

output.addEventListener('mouseover',(e)=>{
    updateProp(e.type);
    //output.style.backgroundColor='red';
})
output.addEventListener('mouseenter',(e)=>{
    updateProp(e.type);
    //output.style.backgroundColor='blue';
})
output.addEventListener('mouseout',(e)=>{
    updateProp(e.type);
    //output.style.backgroundColor='white';
})
output.addEventListener('mousemove',(e)=>{
    updateProp(e.type);
    //output.style.backgroundColor='white';
})
output.addEventListener('wheel',(e)=>{
    updateProp(e.type);
    //output.style.backgroundColor='white';
})

function updateProp(ev){
    console.log(game[ev]);
    game[ev].val += 1;
    game[ev].el.textContent = ev + ' : ' + game[ev].val;
}