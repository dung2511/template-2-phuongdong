import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";
const swiper_incentive = new Swiper(".mySwiper-incentive", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".button-next-incentive",
    prevEl: ".button-prev-incentive",
  },
  breakpoints: {
    480: {
      slidesPerView: 1.5,
    },
    640: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 2.5,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});
const swiper_img = new Swiper(".mySwiperImg", {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".button-next-img",
    prevEl: ".button-prev-img",
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 5,
    },
  },
});
