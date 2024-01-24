const output = document.querySelector('.output');
const game = {x:50,y:50,speed:5,ele:{}}
game.ele = maker();
const keyz = {ArrowRight:false,ArrowLeft:false,ArrowUp:false,ArrowDown:false};

let move = window.requestAnimationFrame(updatePostion);
document.addEventListener('keydown',(e)=>{
    if(e.code in keyz){keyz[e.code] = true;}
})
document.addEventListener('keyup',(e)=>{
    if(e.code in keyz){keyz[e.code] = false;}
})

function updatePostion(){
    const domRect = output.getBoundingClientRect();
    console.log(domRect);
    if(keyz.ArrowRight && game.x < (domRect.right -30) ){
        game.x += game.speed;
    }
    if(keyz.ArrowLeft && game.x > domRect.left ){
        game.x -= game.speed;
    }
    if(keyz.ArrowUp && game.y > domRect.top ){
        game.y -= game.speed;
    }
    if(keyz.ArrowDown && game.y < (domRect.bottom -30) ){
        game.y += game.speed;
    }
    game.ele.style.left = game.x + 'px';
    game.ele.style.top = game.y + 'px';
    move = window.requestAnimationFrame(updatePostion);
}


function maker(){
    const el = document.createElement('div');
    output.append(el);
    el.style.left = game.x + 'px';
    el.style.top = game.y + 'px';
    el.classList.add('box');
    el.style.backgroundColor = '#'+Math.random().toString(16).substr(2,6);
    el.addEventListener('click',(e)=>{
        game.ele = maker();
        
    },{once:true})
    return el;
}