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
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
    $('.single-item').slick({
        dots: true,
        arrows: false
    });
});
