$(function () {

    $('.slider-box').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    AOS.init();

    $('.menu-btn').on('click', function(){
        $('.header__top-menu').slideToggle();
    });
    $('.top-menu').on('click', function(){
        $('.header__top-menu').hide();
    });
});