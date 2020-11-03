let indiv = document.getElementById('individual');
let comp = document.getElementById('company');
let indivBlock = document.getElementById('individual_block');
let compBlock = document.getElementById('company_block')
comp.onclick = function(){
    compBlock.classList.add('active-btn');
    comp.classList.add('active-text');
    indivBlock.classList.remove('active-btn');
    indiv.classList.remove('active-text');
}
indiv.onclick = function(){
    indivBlock.classList.add('active-btn');
    indiv.classList.add('active-text');
    compBlock.classList.remove('active-btn');
    comp.classList.remove('active-text');
}
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
      let width = document.documentElement.clientWidth;
      if(width > 1023){
        if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -30);
        setTimeout(backToTop, 0);
      }
    }
    function navScroll() {
        let width = document.documentElement.clientWidth;
        if (width > 991){
           let scrolled = window.pageYOffset;
        if( scrolled > 90){
            nav.classList.add('scrolled-menu-nav');
            nav.style.justifyContent = 'space-around'; 
        }
        if(scrolled < 90){
            nav.classList.remove('scrolled-menu-nav');
            nav.style.justifyContent = 'space-between';
        } 
        }
    }

    var goTopBtn = document.querySelector('.back_to_top');
    let nav = document.getElementById('navigation');
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
    window.addEventListener('scroll', navScroll);
    
    const anchors = document.querySelectorAll('a[href*="#"]');
for ( let anchor of anchors){
    anchor.addEventListener('click' , function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
// const animItems = document.querySelectorAll('.box');
// if(animItems.length > 0){
// window.addEventListener('scroll' , animOnScroll);
//     function animOnScroll(){
//         console.log('scroll');
//         for( let i = 0; i < animItems.length; i++){
//             const animItem = animItems[i];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint  = window.innerHeight - animItemHeight / animStart;
//             if(animItemHeight > window.innerHeight){
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }
//             if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
//                 animItem.classList.add('active-item');
//             } else {
//                 animItem.classList.remove('active-item');
//             }
//         }
//     }
//     function offset(el){
//         const rect = el.getBoundingClientRect();
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return{ top: rect.top + scrollTop}
//     }
    
// }
$(document).ready(function(){
  let $comments = $('.comments-content');
    $('.slider-screens').slick({
        focusOnSelect: true,
        centerMode:true,
        slidesToShow: 3,
        centerPadding: '220px',
        arrows: false,
        responsive: [
            {
              breakpoint: 1599,
              settings: {
                centerPadding: '156px',
              }
            },
            {
                breakpoint: 1439,
                settings: {
                  centerPadding: '116px',
                }
              },
              {
                breakpoint: 1365,
                settings: {
                  centerPadding: '90px',
                }
              },
              {
                breakpoint: 1279,
                settings: {
                  centerPadding: '20px',

                }
              },
              {
                breakpoint: 1151,
                settings: {
                    slidesToShow: 1,
                  centerPadding: '0px',

                }
              }
        ]
    });
    $('.slider-img').slick({
        centerMode:true,
        infinite: false,
        draggable: false,
        slidesToShow: 3,
        initialSlide: 2,
        speed: 1000,
        asNavFor:'.slider-text',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false,
                centerPadding: '10px',
                focusOnSelect: true,
              }
            },
            {
              breakpoint: 578,
              settings: {
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    });


    $('.slider-text').slick({
        arrows:false,
        slidesToShow:1,
        draggable:false,
        swipe:false,
        centerMode: true,
        fade:true,
        initialSlide: 2,
        infinite:false,
        asNavFor:'.slider-img',
    });
    $('.slider-img').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      if(nextSlide === 0){
        $comments.css({
          'background-color': 'rgb(216, 216, 216)',
          'transition': 'all 1s'
        });
        console.log('0');
      }
      if(nextSlide === 1){
        $comments.css({
          'background-color': 'rgba(195, 221, 236, 0.788)',
          'transition': 'all 1s'
        });
        console.log('1');
      }
      if(nextSlide === 2){
        $comments.css({
          'background-color': 'rgb(255,255,255)',
          'transition': 'all 1s'
        })
        console.log('2');
      }
      if(nextSlide === 3){
        $comments.css({
          'background-color': 'rgb(216, 216, 216)',
          'transition': 'all 1s'
        });
        console.log('3');
      }
      if(nextSlide === 4){
        $comments.css({
          'background-color': 'rgba(195, 221, 236, 0.788)',
          'transition': 'all 1s'
        });
        console.log('4');
      }
    });

});

