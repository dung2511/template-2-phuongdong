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
const list_menu_items = document.querySelector(".list-items"),
  angle_right = document.querySelector(".fa-angle-right"),
  list_items_menu = document.querySelector(".list-items-menu");
list_menu_items.addEventListener("click", (e) => {
  if (list_menu_items.contains(e.target)) {
    list_items_menu.classList.toggle("hidden");
    angle_right.classList.toggle("rotate-90");
  }
});
const hamburger = document.getElementById("hamburger"),
  closeMenu = document.getElementById("close-menu"),
  header_menu = document.getElementById("header_menu");
document.addEventListener("click", (e) => {
  if (hamburger.contains(e.target)) {
    header_menu.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
  } else if (closeMenu.contains(e.target)) {
    header_menu.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
    list_items_menu.classList.toggle("hidden");
  }
});
