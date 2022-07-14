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
    let container = document.querySelector(".header .container")
    let containerWidth = container.offsetWidth
    let mainInner = document.querySelector(".main__inner")
    if(mainInner){
        mainInner.style.width = `${containerWidth / 2}px`
    }
}
