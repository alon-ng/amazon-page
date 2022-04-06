let sideNavStatus = false;

function sideNav() {
  openSideNav();
}

function closeSideNav() {
  sideNavStatus = false;
  document.getElementById("side-nav").style.left = "-365px";
  document.getElementById("side-nav-overlay").style.display = "none";
}

function openSideNav() {
  sideNavStatus = true;
  document.getElementById("side-nav").style.left = "0px";
  document.getElementById("side-nav-overlay").style.display = "block";
}
