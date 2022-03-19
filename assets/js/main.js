/**
* Template Name: Bootslander - v2.3.0
* Template URL: https://bootstrapmade.com/bootslander-free-bootstrap-landing-page-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 21;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the venobox plugin
  $(window).on('load', function() {
    $('.venobox').venobox();
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Initiate venobox lightbox
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
  
  $(".testimonials-carousel-hero").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
    autoplayTimeout:7500,
    // smartSpeed:1000
  });


  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

  // Preloader
  // $(document).ready(function() {
  //   // https://medium.com/@nishancw/how-to-add-a-gif-pre-loader-to-your-website-dcfd29bd055d
    
  //   var preloader = document.getElementById('loader');
  //     // function preLoaderHandler(){
  //       console.log('aaaaa');
  //         preloader.style.display = 'none';
  //     // }
  // });

  // Preloader
  $(window).on('load', function() {
    if ($('#loader').length) {
      $('#loader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });
  
//  End Preloader

// Porfolio isotope and filter
$(window).on('load', function() {
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
    aos_init();
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });
});

// Clients carousel (uses the Owl Carousel library)
$(".clients-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 2
    },
    900: {
      items: 3
    }
  }
});

// Portfolio details carousel
$(".portfolio-details-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  items: 1
});

// Init AOS
function aos_init() {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true
  });
}
$(window).on('load', function() {
  aos_init();
});

// Product carousel (uses the Owl Carousel library)
$(".product-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    900: {
      items: 4
    }
  }
});

/*----- Menu On click -----*/
if ($("#sidemenu_toggle").length) {
   $("body").addClass("pushwrap");
   $("#sidemenu_toggle").on("click", function () {
      $(".pushwrap").toggleClass("active");
      $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
   }), $("#close_side_menu").on("click", function () {
      $(".icofont-navigation-menu").toggle();
      $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
   }), $("#btn_sideNavClose").on("click", function () {
      $(".icofont-navigation-menu").toggle();
      $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
   });

   $(".icofont-navigation-menu").on("click", function () {
    $(".pushwrap").toggleClass("active");
    $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700);
    $(".icofont-navigation-menu").toggle();
 })
}

})(jQuery);