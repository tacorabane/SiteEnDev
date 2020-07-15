/*
The MIT License (MIT)

Copyright (c) 2015, Vincent Garreau

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.

particlesJS('particles-js',{"particles":{"number":{"value":200,"density":{"enable":true,"value_area":800}},"color":{"value":"#00fc00"},"shape":{"type":"circle","stroke":{"width":0,"color":"#ffffff"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#00ff00","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
);
/*
================ END OF PARTICLES FROM VINCENT GARREAU =========================
*/

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
  /*----------------------------------------------------*/
  /* Navigation
  ------------------------------------------------------ */
  window.onresize = function(event) {
    $('.tsparticles-canvas-el').css({
      "width":$('#header').width() + "px",
      "height":$('#header').height() + "px",
      "background-color":"rgb(0, 0, 0)"
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
