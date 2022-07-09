$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: true,
        variableWidth: true,
        // infinite: false,
        initialSlide: 1,
        dots: true,
        asNavFor: '.slider__descr',
    });
    $('.slider__descr').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: false,
        draggable: false,
        swipe: false,
        fade: true,
        cssEase: 'linear',
    });

})

