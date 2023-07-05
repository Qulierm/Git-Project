
window.onload = function() {
    var upButton = document.getElementById("upButton");
    upButton.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }