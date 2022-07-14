function gallerySlider() {
    var swiper = new Swiper('.gallery__slider .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 12,
        loop: true,
        navigation: {
            nextEl: '.gallery__slider .swiper-button-next',
            prevEl: '.gallery__slider .swiper-button-prev',
        },
        pagination: {
            el: '.gallery__slider .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
        }
    })
}

gallerySlider()
