let sideNavStatus = false;
let carouselState = 0;

window.addEventListener('resize', windowResizeUpdate);
window.addEventListener('load', windowResizeUpdate);

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

function moveCarouselRight() {

}

function windowResizeUpdate() {
  let w = document.getElementsByClassName('body-bottom-cotainer')[0].clientWidth * 0.9;
  document.getElementsByClassName('body-bottom-middle')[0].style.width = `${w}px`;
  let cellSize = 110;
  let minGap = 15;
  let cellCount = Math.floor((w + minGap) / (cellSize + minGap))
  let gap = (w - cellCount * cellSize) / cellCount - 1;
  let items = document.getElementsByClassName('carousel-item');
  let itemsCount = items.length;

  for (let i = 1; i < items.length; i++) {
    items[i].style.marginLeft = `${gap}px`;
  }

  let translateX = (cellSize + gap) * cellCount * carouselState;
  document.getElementsByClassName('carousel-list')[0].style.transform = `translateX(-${translateX}px) translateZ(0px)`;

  if (carouselState == 0) {
    document.getElementsByClassName('body-bottom-left-display')[0].style.display = 'none';
  } else {
    document.getElementsByClassName('body-bottom-left-display')[0].style.display = 'block';
  }

  if ((carouselState + 1) * cellCount >= itemsCount) {
    document.getElementsByClassName('body-bottom-right-display')[0].style.display = 'none';
  } else {
    document.getElementsByClassName('body-bottom-right-display')[0].style.display = 'block';
  }
}

function moveCarouselLeft() {
  carouselState--;
  windowResizeUpdate();
}

function moveCarouselRight() {
  carouselState++;
  windowResizeUpdate();
}
