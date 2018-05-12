var PresentFeatureProject = (function() {
  var featuredProject;
  var modal;
  var span;
  var columns;
  var prev;
  var next;
  var slideIndex = 1;
  var mySlides;
  var row;

  function showProject() {
    modal = document.querySelector("#myModal");
    modal.style.display = "block";
    showSlides(slideIndex);
    span = document.querySelector(".close");
    span.addEventListener("click", closeProject);
  }
  function closeProject() {
    modal.style.display = "none";
  }

  function initialize() {
    featuredProject = document.querySelector(".featuredProject");
    featuredProject.addEventListener("click", showProject);
    mySlidesContainer = document.querySelector(".mySlidesContainer");

    for (let i = 0; i < screenshots.length; i++) {
      var mySlides = document.createElement("div");
      mySlides.className = "mySlides";
      mySlides.ref= i + 1
      let words = screenshots[i].words;
      let screenshot = screenshots[i].src;
      var innerHTML =
        "<div class='screenContainer'><div class='screenLeft'>" +
        words +
        "</div><div class='screenRight'><img src=" +
        screenshot +
        "></div></div>";
      mySlides.innerHTML = innerHTML;
      mySlidesContainer.append(mySlides);
    }
    prev = document.querySelector(".prev");
    next = document.querySelector(".next");
    prev.addEventListener("click", minusSlides);
    next.addEventListener("click", plusSlides);
    columns = document.querySelectorAll(".column");
    currentSlide(columns);
  }

  function plusSlides() {
    slideIndex = slideIndex + 1;
    showSlides(slideIndex);
  }

  function minusSlides() {
    slideIndex = slideIndex - 1;
    showSlides(slideIndex);
  }

  function currentSlide(columns) {
    for (let i = 0; i < columns.length; i++) {
      columns[i].addEventListener("click", function() {
        slideIndex = i + 1;
        showSlides(slideIndex);
      });
    }
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    captionText.innerHTML = slides[slideIndex - 1].ref +" / 14";
  }

  return {
    init: function() {
      initialize();
      showProject();
      closeProject();
    }
  };
})();