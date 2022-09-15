$(function(){

    // change color of navbar
    $(window).scroll(function(){

    var scrolling = $(this).scrollTop();
  
    if (scrolling > 30) {
      $('.navbar_main').addClass('nav_1')
  
    } else {
      $('.nav_bg').removeClass('nav_1')
    }

    });

    // banner slider
    $('.ban_slider').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.ban_prev',
		nextArrow: '.ban_next',
    });

 
    // Services slider
    $('.services_main').slick({
        centerMode: true,
        autoplay: true,
        prevArrow: '.ser_prev',
        nextArrow: '.ser_next',
        centerPadding: '0px',
        slidesToShow: 3,
        vertical: true,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
        ]
    });

    // Testimonial slider
    $('.testi_main').slick({
        centerMode: true,
        autoplay: true,
        prevArrow: '.testi_prev',
        nextArrow: '.testi_next',
        centerPadding: '250px',
        slidesToShow: 1,
        vertical: true,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
        ]
    });

    // counter up
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });

    
    // lightbox plugin
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })

      
    $('.p_main').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '.part_prev',
    nextArrow: '.part_next'
    });

});

