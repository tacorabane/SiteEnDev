$("#tsparticles")
 .particles() .init({
  background: {
    color: {
      value: "#000"
    }
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: false,
        mode: "push"
      },
      onHover: {
        enable: false,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 20,
        speed: 2
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#00fc00"
    },
    links: {
      color: "#00ff00",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: false
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        value_area: 800
      },
      value: 100
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      random: true,
      value: 2.5
    }
  },
  detectRetina: true
}, function(container) {});

/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());

$(document).ready(function() {
  var realLeft = Math.trunc(($(window).width() - $('.logo-author>span').width()) /2);
  var realTop = Math.trunc($('.smallsep').position().top - 10);

  $('.logo-author>span').css({
    "left": realLeft + "px",
    "top": realTop + "px"
  });

  /*----------------------------------------------------*/
  /* Navigation
  ------------------------------------------------------ */
  window.onresize = function(event) {
    $('.tsparticles-canvas-el').css({
      "width":$('#header').width() + "px",
      "height":$('#header').height() + "px",
      "background-color":"rgb(0, 0, 0)"
    });

    var realLeft = Math.trunc(($(window).width() - $('.logo-author>span').width()) /2);
    var realTop = Math.trunc($('.smallsep').position().top - 10);

    $('.logo-author>span').css({
      "left": realLeft,
      "top": realTop
    });
  };

  $('.tsparticles-canvas-el').css({
    "width":$('#header').width() + "px",
    "height":$('#header').height() + "px",
    "background-color":"rgb(0, 0, 0)"
  });

  $(window).scroll(function() {

      if ($(window).scrollTop() > 300) {
          $('.main_nav').addClass('sticky');
      } else {
          $('.main_nav').removeClass('sticky');
      }
  });

  // Mobile Navigation
  $('.mobile-toggle').click(function() {
      if ($('.main_nav').hasClass('open-nav')) {
          $('.main_nav').removeClass('open-nav');
      } else {
          $('.main_nav').addClass('open-nav');
      }
  });

  $('.main_nav li a').click(function() {
      if ($('.main_nav').hasClass('open-nav')) {
          $('.navigation').removeClass('open-nav');
          $('.main_nav').removeClass('open-nav');
      }
  });

  /*----------------------------------------------------*/
  /* Smooth Scrolling
  ------------------------------------------------------ */
   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);
});
