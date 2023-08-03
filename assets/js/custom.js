if ($(window).width() > 319) {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
}

$("button.close-btn").click(function () {
  $(".navbar-collapse").removeClass("collapsing show");
});

$(document).ready(function () {
  ("use strict");
});
