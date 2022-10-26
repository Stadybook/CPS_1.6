export default slider;

function slider(){
    const sliders = document.querySelectorAll('.swiper');
    sliders.forEach(initSwiper)

    function initSwiper(slider){
    let mySwiper;
    function mobileSlider(){
        mySwiper = new Swiper(slider, {   
        pagination: {
            el: '.swiper-pagination',
            clickable:true,     
        },
        slideClass:'swiper-slide',
        slidesPerView: "auto",
        observeParents: true,
        spaceBetween: 16,
        watchOverflow:true,
        }); 
        slider.dataset.mobile = 'true';
    }
    if (window.screen.width < 768){
        mobileSlider(); 
    }
    window.addEventListener('resize', () =>{
        if (window.screen.width < 768 && slider.dataset.mobile == 'false'){
        mobileSlider();
        }
        if (window.screen.width >= 768){
            slider.dataset.mobile = 'false';
                if(slider.classList.contains('swiper-initialized')){
                    mySwiper.destroy();
                    console.log('destroy')
                }
            }
        });
    }
}

