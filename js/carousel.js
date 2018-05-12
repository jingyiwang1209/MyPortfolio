var Carousel = (function() {
  var peopleImage;
  var peopleTitle;
  var peopleWords;
  var prev;
  var next;
  var globalIndex=0;

  function loadPeople(ind) {
    // define default index to show the default person

    for (var j = 0; j < peopleImage.length; j++) {
      peopleImage[j].classList.remove("active");
    }

    if (ind < 0) {
      ind = peopleImage.length - 1;
    }

    if (ind > peopleImage.length - 1) {
      ind = 0;
    }

    peopleImage[ind].classList.add("active");
    peopleTitle[0].innerHTML =
      recommendations.people[ind].name +
      "<br>" +
      recommendations.people[ind].title;
    peopleWords[0].innerHTML = recommendations.people[ind].say;
    globalIndex = ind;
  }

  function selectPeople() {
    for (var i = 0; i < peopleImage.length; i++) {
      peopleImage[i].index = i;
      peopleImage[i].addEventListener("click", function() {
        loadPeople(this.index);
      });
    }
  }



  function OperateKeyBoard(e) {
    if (e.keyCode == 37) {
      globalIndex = globalIndex - 1;
      loadPeople(globalIndex);
    }
    if (e.keyCode == 39) {
      globalIndex = globalIndex + 1;

      loadPeople(globalIndex);
    }
  }

  function initialize() {
    peopleImage = document.querySelectorAll(".imageList img");
    peopleTitle = document.querySelectorAll(".peopleBio p");
    peopleWords = document.querySelectorAll(".peopleWords p");
    document.addEventListener("keyup", OperateKeyBoard);
  }

  return {
    init: function() {
      initialize();
      selectPeople();
    }
  };
})();