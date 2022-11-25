$(document).ready(function () {
    $('.c-design__slider').slick({
        infinite: true,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="c-design__prev"></button>',
        nextArrow:'<button type="button" class="c-design__next"></button>',
        cssEase: 'linear'
    });
});