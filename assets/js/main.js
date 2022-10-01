/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');

    if(this.scrollY >= 50) {
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);
/*=============== SWIPER POPULAR ===============*/
let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

/*=============== VALUE ACCORDION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
