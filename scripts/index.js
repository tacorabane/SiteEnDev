$(document).ready(function() {
  var input = document.querySelector(".pswr");
  var show = document.querySelector("#show");
  var authBtn = document.querySelector(".auth-icon");
  var closeBtn = document.querySelector(".close");
  var pageAuth = document.querySelector(".auth-menu");
  const timeToToggle = 500;

  show.addEventListener('click', function() {
    if(input.type === "password") {
      input.type = "text";
      show.classList.replace("fa-eye-slash", "fa-eye");
      show.setAttribute("style", "margin-left: 300px; cursor: pointer;");
    } else {
      input.type = "password";
      show.classList.replace("fa-eye", "fa-eye-slash");
      show.removeAttribute("style");
    }
  });

  authBtn.addEventListener('click', function () {
    if(authBtn.classList.value === "auth-icon") {
      var windowWidth = document.body.clientWidth;
      var ratio = windowWidth * .01;
      pageAuth.style.left = Math.trunc(((windowWidth - (370 + 8)) / ratio) / 2).toString() + "vw";
      authBtn.classList.add("active");
      $('.auth-menu').css("z-index", "1");
      $('.auth-menu').slideToggle(timeToToggle);
    } else {
      authBtn.classList.remove("active");
      $('.auth-menu').slideToggle(timeToToggle);
    }
  });

  closeBtn.addEventListener('click', function() {
    if(authBtn.classList.value === "auth-icon active") {
      authBtn.classList.remove("active");
      $('.auth-menu').slideToggle(timeToToggle);
    }
  });

/* Ajustement du conteneur d'authentification */
  window.onresize = function(event) {
    /*AOS.refresh();*/

    if(authBtn.classList.value == "auth-icon active") {
      pageAuth.style.left = Math.trunc(((document.body.clientWidth - (370 + 8)) / (document.body.clientWidth * .01)) / 2).toString() + "vw";
    };

    if($(window).width() <= 900) {
      $('.box-content-1').removeAttr("data-aos");
      $('.box-content-2').removeAttr("data-aos");
      $('.box-content-3').removeAttr("data-aos");
    }
  };

  if($(window).width() <= 900) {
    var realLeft1 = Math.trunc(($(window).width() - $('.img-pres-1').width()) / 2);
    var realLeft2 = Math.trunc(($(window).width() - $('.img-pres-2').width()) / 2);
    var realLeft3 = Math.trunc(($(window).width() - $('.img-pres-3-1').width()) / 2);

    $('.img-pres-1').css({
      "position":"relative",
      "left":realLeft1 + "px"
    });

    $('.img-pres-2').css({
      "position":"relative",
      "left":realLeft2 + "px"
    });

    $('.img-pres-3-1').css({
      "position":"relative",
      "left":realLeft3 + "px"
    });

    $('.img-pres-3-2').css({
      "position":"relative",
      "left":realLeft3 + "px"
    });
  }

/*
  if($(window).width() <= 900) {
    console.log("Size inferior to 900px");
    $('.img-pres-1').removeAttr("data-aos");
    $('.img-pres-1').removeAttr("data-aos-duration");
    $('.img-pres-1').removeAttr("data-aos-anchor-placement");
    $('.img-pres-1').attr("class", "img-pres-1");

    $('.img-pres-2').removeAttr("data-aos");
    $('.img-pres-2').removeAttr("data-aos-duration");
    $('.img-pres-2').removeAttr("data-aos-anchor-placement");

    $('.img-pres-3-1').removeAttr("data-aos");
    $('.img-pres-3-1').removeAttr("data-aos-duration");
    $('.img-pres-3-1').removeAttr("data-aos-anchor-placement");

    $('.img-pres-3-2').removeAttr("data-aos");
    $('.img-pres-3-2').removeAttr("data-aos-duration");
    $('.img-pres-3-2').removeAttr("data-aos-anchor-placement");

    $('.txt-pres-1').removeAttr("data-aos");
    $('.txt-pres-1').removeAttr("data-aos-duration");
    $('.txt-pres-1').removeAttr("data-aos-anchor-placement");

    $('.txt-pres-2').removeAttr("data-aos");
    $('.txt-pres-2').removeAttr("data-aos-duration");
    $('.txt-pres-2').removeAttr("data-aos-anchor-placement");

    $('.txt-pres-3').removeAttr("data-aos");
    $('.txt-pres-3').removeAttr("data-aos-duration");
    $('.txt-pres-3').removeAttr("data-aos-anchor-placement");

    $('.box-content-1').attr({
      //"class":"box-content-1 aos-init",
      "data-aos":"fade-left",
      "data-aos-duration":"1000",
      "data-aos-anchor-placement":"center-center"
    });

    $('.box-content-2').attr({
      //"class":"box-content-2 aos-init",
      "data-aos":"fade-right",
      "data-aos-duration":"1000",
      "data-aos-anchor-placement":"center-center"
    });

    $('.box-content-3').attr({
      //"class":"box-content-3 aos-init",
      "data-aos":"fade-right",
      "data-aos-duration":"1000",
      "data-aos-anchor-placement":"center-center"
    });

    AOS.refresh();
  }
*/

/* Vérification du format du mail dans le footer */
  $('#submit_msg').click(function() {
    var mail = $('#email_send').val();
    var message = $('#msgForm').val();

    if(mail == "") {
      return false;
    }

    if(message == "") {
      return false;
    }

    if(!isEmail(mail)) {
      $('#invalid_email').css({
        "display":"block"
      });
      return false;
    }

    return false;
  });

  $("#email_send").change(function() {
    $('#invalid_email').css({
      "display":"none"
    })
  });

/* Fonction vérification email */
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }
});
