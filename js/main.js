// $('.menu-btn').click(function(){
//     $('.menu-nav').css('display','flex');
//     $('.user').css('display','flex');
// })

$('.menu-btn').click(function(){
    $('.menu-nav').slideToggle();
})

var swiper = new Swiper(".mySwiper", {
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });