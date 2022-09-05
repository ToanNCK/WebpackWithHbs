// swiper
// core version + navigation, pagination modules:
import Swiper, {
  Navigation,
  Pagination,
  Mousewheel,
} from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".slide-home", {
  modules: [Navigation, Pagination, Mousewheel],
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".slide-home .swiper-pagination",
    clickable: true,
  },
});
// init Swiper:
const swiper2 = new Swiper(".news-swiper", {
  modules: [Pagination],
  pagination: {
    el: ".news-swiper .swiper-pagination",
    clickable: true,
  },
});
const swiper3 = new Swiper(".videoSwiper", {
  modules: [Navigation],
  spaceBetween: 1,
  slidesPerView: 1.2,
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    640: {
      spaceBetween: 1,
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    768: {
      spaceBetween: 1,
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    1024: {
      spaceBetween: 1,
      slidesPerView: 1.8,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".videoSwiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".videoSwiper .swiper-button-next",
    prevEl: ".videoSwiper .swiper-button-prev",
  },
});