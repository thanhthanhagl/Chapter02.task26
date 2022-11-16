//const { Value } = require("sass");

//console.log("main.js");
$(document).ready(function () {
    $('.c-slider').slick({
        infinite: true,//loop
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});