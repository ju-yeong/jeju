// top move button

$(window).scroll(function(){
  console.log($(this).scrollTop())

	if ($(this).scrollTop() > 300){
		$('.move-top').show();
	} else {
    $('.move-top').hide();
  }
  
  if ($(this).scrollTop() > 2600){
    $('.move-top').addClass('move-top-ab');
  } else {
    $('.move-top').removeClass('move-top-ab');
  }
});

$('.move-top').click(function(){
	$('html, body').animate({
    scrollTop:0
  },400);
	return false;
});

// move top button end


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