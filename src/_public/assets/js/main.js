$(document).ready(function () {
    $('.c-design__slider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed:300,
        arrows:true,
        slidesToShow: 1,
        prevArrow:'<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>'
    });
});