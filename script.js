// my js for the contact form to reset on click ------------------------------------------------------------------------------------------------------

var contactForm = document.getElementByID("button1");

contactForm.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();
  FormData.reset();
});

// the js for the carousel --------------------------------------------------------------------------------------------------------------------

var responsiveSlider = function () {
  var slider = document.getElementById("main-carousel");
  console.log(slider);

  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slides");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function () {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function () {
    nextSlide();
  });

  prev.addEventListener("click", function () {
    prevSlide();
  });

  setInterval(function () {
    nextSlide();
  }, 5000);
};
window.onload = function () {
  responsiveSlider();
};
