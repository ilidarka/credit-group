jQuery(document).ready(function ($) {
  var slideCount = $("#slider ul li").length;
  var slideWidth = $("#slider ul li").width();
  var slideHeight = $("#slider ul li").height();
  var sliderUlWidth = slideCount * slideWidth;

  $("#slider").css({ width: slideWidth, height: slideHeight });

  $("#slider ul").css({ width: sliderUlWidth, marginLeft: - 330  });

  $("#slider ul li:last-child").prependTo("#slider ul");

  function moveLeft() {
    $("#slider ul").animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $("#slider ul li:last-child").prependTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  function moveRight() {
    $("#slider ul").animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $("#slider ul li:first-child").appendTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  $(".control_prev").click(function () {
    moveLeft();
  });

  $(".control_next").click(function () {
    moveRight();
  });
  // setInterval(function () {
  //   moveRight();
  // }, 5000);
});

var slideIndex = 1;
showSlides(slideIndex);

// Вперед/назад элементы управления
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Элементы управления миниатюрами изображений
function currentSlide(n) {
  showSlides((slideIndex = n));
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot_slide_2");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}




var slide_mobile = 1;
show(slide_mobile);

function plus(n) {
  show((slide_mobile += n));
}

function current(n) {
  showSlides_message((slide_mobile = n));
}

function show(n) {
  var i;
  var slide = document.querySelectorAll(".slides_Mobile");
  var dot = document.getElementsByClassName("dot");
  if (n > slide.length) {
    slide_mobile = 1;
  }
  if (n < 1) {
    slide_mobile = slide.length;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slide[slide_mobile - 1].style.display = "block";
  dot[slide_mobile - 1].className += " active";
}