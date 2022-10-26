import '../scss/style.scss';
import slider from './swiper';


slider();

let text = document.querySelector('.section__text');
let btn = document.querySelector('.section__more');
if(btn){
btn.addEventListener('click', function(){
    let open= btn.classList.contains('more-btn--clicked');
    if(open){
        btn.innerText ='Читать далее';
    }
    else{
        btn.innerText ='Скрыть';   
    }
    btn.classList.toggle('more-btn--clicked');
    text.classList.toggle('section__text--show');
})
}

let lists = document.querySelectorAll('.swiper__list');
let buttons = document.querySelectorAll('.section__btn');
for(let i = 0; i<= buttons.length;i++){
    let button=buttons[i];
    let list = lists[i];
    if(button){
    button.addEventListener('click', function(){
        let open= button.classList.contains('more-btn--clicked');
        if(open){
            button.innerText ='Показать все';
        }
        else{
            button.innerText ='Скрыть';   
        }
        button.classList.toggle('more-btn--clicked');
        list.classList.toggle('swiper__list--show');
        })
    }
}

let container = document.querySelector('.container');
let sidebars= document.querySelectorAll('.sidebar');
let sidebar_burger = document.getElementById('burger');
let sidebar_message = document.getElementById('message');
let sidebar_call = document.getElementById('feedback');

document.addEventListener('click', function(evt){
    if(evt.target.closest('.icon-burger')){
        container.classList.add('container-opasity');   
        sidebar_burger.classList.add('sidebar--show');  
        
    }
    if(evt.target.closest('.icon-message')){
        container.classList.add('container-opasity');   
        sidebar_message.classList.add('sidebar--show'); 
        sidebar_burger.classList.remove('sidebar--show');   
        }
    if(evt.target.closest('.icon-call')){
        container.classList.add('container-opasity');   
        sidebar_call.classList.add('sidebar--show');  
        sidebar_burger.classList.remove('sidebar--show');  
    }
    if(evt.target.closest('.icon-close')){
        sidebars.forEach((sidebar)=>{
            sidebar.classList.remove('sidebar--show')
        }) 
        container.classList.remove('container-opasity');         
    }  
})
container.addEventListener('click', function(evt){
    if(container.classList.contains('container-opasity')){
        container.classList.remove('container-opasity');
        sidebars.forEach((sidebar)=>{
            sidebar.classList.remove('sidebar--show')
        }) 
    }  
})



