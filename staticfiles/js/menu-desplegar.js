function ocultar() {
  var menuElement = document.getElementById("main");
  var currentMarginTop = parseInt(menuElement.style.marginTop);

  if (currentMarginTop === 0) {
    menuElement.style.marginTop = "-400%";
  } else {
    menuElement.style.marginTop = "0%";
  }
}