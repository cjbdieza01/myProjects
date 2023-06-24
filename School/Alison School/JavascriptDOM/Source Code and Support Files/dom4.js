const main = document.querySelector('#myId');
main.innerHTML = '';
//https://dummyimage.com/200x100/ffffff/000000&text=dummyimage.com+rocks! //background /color
const url =  '//dummyimage.com/200x100/';
for(let i=0;i<40;i++){
    main.innerHTML += `<img>`;
}

const imgs = document.querySelectorAll('img');
imgs.forEach((el,index)=>{
    if(!el.getAttribute('src')){
        const myImg = url + `${myRandomColors()}/${myRandomColors()}&text=New Image ${index+1}` ;
        el.setAttribute('src',myImg);
    }
})

function myRandomColors(){
    return Math.random().toString(16).substr(2,6);
}

/* for(let x=0;x<10;x++){
    main.innerHTML += `<a href="#">Click Me ${x+1}</a><br>`;
}

const eles = document.querySelectorAll('a[href="#"]');
console.log(eles);
eles.forEach((el,index)=>{
    console.log(el);
    if(index %3 == 0){
        el.classList.add('blue');
    }
    if(index %2 == 0){
        el.classList.add('red');
    }
    el.setAttribute('target','_blank');
})

 */