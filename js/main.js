var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

$( '.menuBtn' ).click( function() {
  $( '.user' ).slideToggle();
} );

// header scroll show/hide event
// let prevScrollTop = 0;
// let nowScrollTop = 0;

// function wheelDelta(){
//     return prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';
// };

// $(window).on('scroll', function(){
//   if(wheelDelta() == 'down'){
//     $('.main-nav').slideDown();
//   }
//   if(wheelDelta() == 'up'){
//     $('.main-nav').slideUp();
//   }
//   prevScrollTop = nowScrollTop;
// });

var lastScrollTop = 0, delta = 15;

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop()
    if(Math.abs(lastScrollTop - scrollTop) <= delta)
    return;

    if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
        $(".main-nav").fadeOut();
    } else {
        $(".main-nav").fadeIn();
    }
    lastScrollTop = scrollTop;
});

// header scroll show/hide event