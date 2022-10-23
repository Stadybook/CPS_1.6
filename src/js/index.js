
import '../scss/del.scss';
import '../scss/style_1.3.scss';
import '../scss/style_1.4s.scss';
import '../scss/style_1.5.scss';
import '../scss/style_1.7.scss';
import '../scss/style_1.8.scss';
import '../scss/sidebar_message.scss';

const sliders = document.querySelectorAll('.swiper');
sliders.forEach(function(slider){
    let mySwiper;
    function mobileSlider(){
        mySwiper = new Swiper(slider, {   
        pagination: {
            el: '.swiper-pagination',
            clickable:true,     
        },
        slideClass:'swiper-slide',
        slidesPerView: "auto",
        observer: true,
        observeParents: true,
        spaceBetween: 16,
        watchOverflow:true,
    }); 
        slider.dataset.mobile = 'true';
    }

    mobileSlider();

    window.addEventListener('resize', () =>{
        if (window.screen.width < 768 && slider.dataset.mobile == 'false'){
        mobileSlider();
        }
        if (window.screen.width >= 768){
            slider.dataset.mobile = 'false';
                if(slider.classList.contains('swiper-initialized')){
                    mySwiper.destroy();
                }
            }
    });
})

let list = document.querySelectorAll('.section__list');
let buttons = document.querySelectorAll('.section__btn');

if(buttons[0]){
    let button = buttons[0];
    button.addEventListener('click', function(){
        let text = button.innerText;
        let open= button.classList.contains('more-btn--clicked');
        if(open){
            button.innerText ='Показать все';
        }
        else{
            button.innerText ='Скрыть';   
        }

        list[0].classList.toggle('section__list--show');
        button.classList.toggle('more-btn--clicked');
    })
}
if(buttons[1]){
    let button = buttons[1];
    button.addEventListener('click', function(){
        let text = button.innerText;
        let open= button.classList.contains('more-btn--clicked');
        if(open){
            button.innerText ='Показать все';
        }
        else{
            button.innerText ='Скрыть';   
        }

        list[1].classList.toggle('section__list--show');
        button.classList.toggle('more-btn--clicked');
    })
}

let sidebar_burger = document.querySelector('.sidebar-burger');
let sidebar_message = document.querySelector('.sidebar-message');
let sidebar_call = document.querySelector('.sidebar-call');

document.addEventListener('click', function(evt){
    if(evt.target.closest('.icon-burger')){
    sidebar_burger.classList.add('sidebar-burger--show');   
    }
    if(evt.target.closest('.icon-message')){
        sidebar_message.classList.add('sidebar-message--show');   
        }
        if(evt.target.closest('.icon-call')){
        sidebar_call.classList.add('sidebar-call--show');   
        }
    if(evt.target.closest('.icon-close')){
        sidebar_message.classList.remove('sidebar-message--show');
        sidebar_burger.classList.remove('sidebar-burger--show');
        sidebar_call.classList.remove('sidebar-call--show');       
    }
})

sidebar_burger.addEventListener('click', function(evt){
    if(!evt.target.closest('.sidebar')){
        sidebar_burger.classList.remove('sidebar-burger--show');      
    }
})
sidebar_message.addEventListener('click', function(evt){
    if(!evt.target.closest('.sidebar-connection')){
        sidebar_message.classList.remove('sidebar-message--show');      
    }
})
sidebar_call.addEventListener('click', function(evt){
    if(!evt.target.closest('.sidebar-feedback')){
        sidebar_call.classList.remove('sidebar-call--show'); 
    }
})

