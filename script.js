const bars = document.getElementById('bar');
const navs= document.getElementById('navigation');
const close = document.getElementById('close');

if(bars){
    bars.addEventListener('click',() =>{
        navs.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',() =>{
        navs.classList.remove('active');
    })
}