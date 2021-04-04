$('.header-container').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: '<div class="slick-prev"><img src="/images/white-prev-arrow.svg"></div>',
    nextArrow: '<div class="slick-next"><img src="/images/white-next-arrow.svg"></div>'
});

$('.inner-photos-container').slick({
    mobileFirst: true,
    infinite: true,
    speed: 500,
    arrows: false,
    centerMode: true,
    centerPadding: '25px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: '<div class="slick-prev"><img src="/images/black-prev-arrow.svg"></div>',
    nextArrow: '<div class="slick-next"><img src="/images/black-next-arrow.svg"></div>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1099,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                centerMode: false,
                centerPadding: '0px',
                autoplay: false,
            }
        },
    ]
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll >= 0 && scroll < 100){
        $('.black-header-container').css('display', 'none');
    }else{
        $('.black-header-container').css('display', 'block');
    }
});

$('.open-menu').click(function(){
    $('.mobile-menu').addClass('open');
    $('.white-header-container').css('position', 'inherit');
    $('.black-header-container').css('display', 'none');
    $('body').css('overflow', 'hidden');
});

$('.close-menu').click(function(){
    $('.mobile-menu').removeClass('open');
    $('.black-header-container').css('display', 'block');
    $('body').css('overflow', 'auto');

    var distance = $(document).scrollTop();

    if(distance >= 0 && distance <= 100){
        $('.black-header-container').css('display', 'none');
    }else{
        $('.black-header-container').css('display', 'block');
    }

    setTimeout(function() {
        $('.white-header-container').css('position', 'relative');
    }, 500);
});

$('.menu-item a').click(function(){
    $('.mobile-menu').removeClass('open');
    $('.black-header-container').css('display', 'block');
    $('body').css('overflow', 'auto');

    var distance = $(document).scrollTop();

    if(distance >= 0 && distance <= 100){
        $('.black-header-container').css('display', 'none');
    }else{
        $('.black-header-container').css('display', 'block');
    }

    setTimeout(function() {
        $('.white-header-container').css('position', 'relative');
    }, 500);
});