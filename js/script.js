$('.discount-slide').slick({
    dots: false,
    arrow: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 461,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
})

// Sticky Nav
    
$(window).scroll(function() {     
    var scroll = $(window).scrollTop();     
    if (scroll > 100) { 
        $(".header").addClass("fixed"); 
    } 
    else {
    $(".header").removeClass("fixed"); 
    }
  })

// add class

$('.navbar-toggler').on('click', function(){
  $('body').toggleClass('o-hidden');
})