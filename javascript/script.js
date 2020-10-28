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
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -30);
        setTimeout(backToTop, 0);
      }
    }
    function navScroll() {
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
    var goTopBtn = document.querySelector('.back_to_top');
    let nav = document.getElementById('navigation');
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
    window.addEventListener('scroll', navScroll);