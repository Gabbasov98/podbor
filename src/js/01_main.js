function certificateSlider() {
    var swiper = new Swiper('.certificate .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.certificate .swiper-button-next',
            prevEl: '.certificate .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    })
}

function videosSlider() {
    var swiper = new Swiper('.videos .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.videos .swiper-button-next',
            prevEl: '.videos .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    })
}

function blogSlider() {
    var swiper = new Swiper('.blog .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.blog .swiper-button-next',
            prevEl: '.blog .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1100: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    })
}

function feedbackSlider() {
    var swiper = new Swiper('.feedback .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.feedback .swiper-button-next',
            prevEl: '.feedback .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1100: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    })
}

certificateSlider()
videosSlider()
blogSlider()
feedbackSlider()

let header = document.querySelector(".header")
let body = document.querySelector("body")
let headerBurger = document.querySelector(".header__burger")
let headerClose = document.querySelector(".header__close")
let headerBg = document.querySelector(".header__bg")


headerBurger.onclick = function () {
    body.classList.add("fixed-body")
    header.classList.add("header--active")
}

headerClose.onclick = function () {
    closeHeader()
}
headerBg.onclick = function () {
    closeHeader()
}

function closeHeader() {
    body.classList.remove("fixed-body")
    header.classList.remove("header--active")
}
