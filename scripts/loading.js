$(document).ready(function() {
  if(navigator.userLanguage) {
    var lang = navigator.userLanguage;
  } else {
    var lang = navigator.language;
  }

  if(lang === "fr") {
    $('#loading').html("CHARGEMENT");
  }

  var posX = Math.trunc(($('body').width() - $('.loader').width()) / 2);
  var posY = Math.trunc(($('body').height()) / 2);

  $('.loader').css({
    "top":posY + "px",
    "left":posX + "px"
  });

  window.onresize = function() {
    var posX = Math.trunc(($('body').width() - $('.loader').width()) / 2);
    var posY = Math.trunc(($('body').height()) / 2);

    $('.loader').css({
      "top":posY + "px",
      "left":posX + "px"
    });
  };

  var alphabet = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0");

  var letter_count = 0;
  var el = $('#loading');
  var word = el.html().trim();
  var finished = false;

  el.html("");
  for(var i = 0; i < word.length; i++) {
    el.append("<span>" + word.charAt(i) + "</span>");
  }

  setTimeout(write, 75);
  incrementer = setTimeout(inc, 1000);

  function write() {
    for(var i = letter_count; i < word.length; i++) {
      var c = Math.floor(Math.random() * 36);
      $("span")[i].innerHTML = alphabet[c];
    }
    if(!finished) {
      setTimeout(write, 75);
    }
  }

  function inc() {
    $("span")[letter_count].innerHTML = word[letter_count];
    $("span:eq("+letter_count+")").addClass("glow");
    letter_count++;

    if(letter_count >= word.length) {
      finished = true;
      window.location.href = "author.html";
    } else {
      setTimeout(inc, 1000);
    }
  }
});
