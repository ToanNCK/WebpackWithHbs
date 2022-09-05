import "./library/aos";
import "./library/swiper";
import {
  gsap,
  Draggable
} from "gsap/all";
gsap.registerPlugin(Draggable);
// scroll show hide nav
var lastScrollTop;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-70px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
// bootstrap 5 hover dropdown
if (window.innerWidth > 992) {
  document.querySelectorAll(".navbar .nav-item").forEach(function (everyitem) {
    everyitem.addEventListener("mouseover", function (e) {
      let el_link = this.querySelector("a[data-bs-toggle]");

      if (el_link != null) {
        let nextEl = el_link.nextElementSibling;
        el_link.classList.add("show");
        nextEl.classList.add("show");
      }
    });
    everyitem.addEventListener("mouseleave", function (e) {
      let el_link = this.querySelector("a[data-bs-toggle]");

      if (el_link != null) {
        let nextEl = el_link.nextElementSibling;
        el_link.classList.remove("show");
        nextEl.classList.remove("show");
      }
    });
  });
}
// end if innerWidth
// modal search
const submitCloses = document.querySelectorAll(".submit-close");
const submitOpens = document.querySelectorAll(".open-search");
const seachModel = document.querySelector(".head-search-modal");
// for (const submitOpen of submitOpens) {
//   submitOpen.addEventListener('click', function (event) {
//     seachModel
//   })
// }

submitOpens.forEach((openBtn) => {
  openBtn.addEventListener("click", openModal);
});
submitCloses.forEach((closeBtn) => {
  closeBtn.addEventListener("click", closeModal);
});

function openModal() {
  seachModel.classList.add("show");
}

function closeModal() {
  seachModel.classList.remove("show");
}

// gsap Draggable
const bodyHome = document.querySelector("body");
const [containerImgR, imgR, btnRight, btnDragRight, arrXr, arrYr, boundsR] = [
  document.querySelector(".keyframe-container.right"),
  document.querySelectorAll(".keyframe-container.right img"),
  document.querySelector(".right .keyframe-slider-btn"),
  document.querySelector(".drag-right"),
  [10.6769, 55.8275, 95.5204, 121.911, 138.031, 141.02],
  [9.54731, 18.94, 40.0562, 71.8058, 110.443, 160.599],
  document.querySelector(".keyframe-slider.right"),
];
const [containerImgL, imgL, btnLeft, btnDragLeft, arrXl, arrYl, boundsL] = [
  document.querySelector(".keyframe-container.left"),
  document.querySelectorAll(".keyframe-container.left img"),
  document.querySelector(".left .keyframe-slider-btn"),
  document.querySelector(".drag-left"),
  [135.933, 92.1536, 62.1062, 56.2486, 72.0667],
  [9.27395, 40.5267, 90.1159, 145.417, 198.726],
  document.querySelector(".keyframe-slider.left"),
];
let [iR, iL] = [0, 0];
const fixR = window.outerWidth < 768 ? boundsR.offsetWidth / 160 : 1;
const fixL = window.outerWidth < 768 ? boundsL.offsetWidth / 200 : 1;
if (btnRight)
btnRight.style.transform = `translateX(${arrXr[0] * fixR}px) translateY(${
  arrYr[0] * fixR
}px) rotate(0deg)`;
if (btnLeft)
btnLeft.style.transform = `translateX(${arrXl[0] * fixL}px) translateY(${
  arrYl[0] * fixL
}px) rotate(0deg)`;

const draggableGsap = (containerImgHide, ...arg) => {
  let [
    containerImg,
    img,
    btn,
    btnDrag,
    arrX,
    arrY,
    bounds,
    indexSef,
    reduceX,
    reduceY,
    fix,
  ] = arg;
  Draggable.create(btnDrag, {
    type: "x,y",
    bounds: bounds,
    onDrag: function () {
      let check = false;
      let tx = this.x;
      let ty = this.y;
      bodyHome.style.cursor = "grabbing";
      containerImgHide.style.display = "none";
      containerImg.style.display = "block";
      for (let i = 0; i < img.length; i++) {
        if (tx <= arrX[i] && ty <= arrY[i] && !check) {
          check = true;
          indexSef = i;
          img.forEach((img, index) => {
            if (index === indexSef) img.style.setProperty("display", "block");
            else img.style.setProperty("display", "none");
          });
        }
      }

      gsap.timeline().to(btn, {
        x: arrX[indexSef] * fix,
        y: arrY[indexSef] * fix,
        duration: 0,
        ease: "none",
      });
    },
    onDragEnd: function () {
      bodyHome.style.cursor = "default";
      gsap.to(btnDrag, {
        x: (arrX[indexSef] - reduceX) * fix,
        y: (arrY[indexSef] - reduceY) * fix,
      });
    },
  });
};
if (btnRight)
draggableGsap(
  containerImgL,
  containerImgR,
  imgR,
  btnRight,
  btnDragRight,
  arrXr,
  arrYr,
  boundsR,
  iR,
  10,
  10,
  fixR
);
if (btnLeft)
draggableGsap(
  containerImgR,
  containerImgL,
  imgL,
  btnLeft,
  btnDragLeft,
  arrXl,
  arrYl,
  boundsL,
  iL,
  136,
  9,
  fixL
);
// end gsap Draggable
// spymenu

const MenuSpy = require('menuspy');
const elm = document.querySelector('#scrollspy-sidebar');
const ms = new MenuSpy(elm, {
  activeClass: 'current-item',
  enableLocationHash: 'false'
});