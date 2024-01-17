$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.about-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="slick-prev prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next next-arrow"><i class="fa-solid fa-arrow-right"></i></button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });