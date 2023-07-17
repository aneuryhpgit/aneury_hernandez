function ocultar() {
  var menuElement = document.getElementById("main");
  var currentMarginTop = parseInt(menuElement.style.marginTop);

  if (currentMarginTop === 0) {
    menuElement.style.marginTop = "-300%";
  } else {
    menuElement.style.marginTop = "0";
  }
}