$(document).ready(function(){
    $('.center').slick({
      dots: true,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      adaptiveHeight: true,
      variableWidth: true,
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
});
