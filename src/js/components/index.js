function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: false,
        autoplay: {
            delay: 5000,
        },
        speed: 2000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    })
}

mainSlider()

setMainContainerWidth()

window.onresize = () => {
    setMainContainerWidth()
}

function setMainContainerWidth() {
    let containerWidth = document.querySelector(".header .container").offsetWidth;
    document.querySelector(".main__inner").style.width = `${containerWidth / 2}px`
}
