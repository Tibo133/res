window.addEventListener("scroll", function() {
    var footer = document.getElementById("sujet");
    var wrapperHeight = document.querySelector(".lecontenu").offsetHeight;
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY || window.pageYOffset;
  
    if (scrollPosition >= (wrapperHeight - windowHeight)) {
      footer.style.display = "block";
    } else {
      footer.style.display = "none";
    }
});

  
