$(document).ready(function () {
  //Testimonials slider
  $(".block-testimonial__cards-wrapper").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //hamburger menu
  $(window).on('resize load', function () {
    if ($(window).width() < 768) {
      var isMenuOpen = false;
      $('.hamburger-menu .hamburger-btn').click(function () {
        console.log('clicked');
        if (!isMenuOpen) {
          $('.navbar__mobile .hamburger-menu').addClass('open');
        } else {
          $('.navbar__mobile .hamburger-menu').removeClass('open');
        }
        isMenuOpen = !isMenuOpen;

        if (!$('.navbar__mobile-menu-list').hasClass('hamburger-menu--active')) {
          $('.navbar__mobile-menu-list').addClass('hamburger-menu--active');
        } else {
          $('.navbar__mobile-menu-list').removeClass('hamburger-menu--active');
        }
      });
    }
  });
});
