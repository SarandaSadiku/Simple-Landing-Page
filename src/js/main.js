$(document).ready(function(){
    $('.center').slick({
      dots: true,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      adaptiveHeight: true,
      variableWidth: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
    $('.single-item').slick({
        dots: true,
        arrows: false
    });
});
