`use strict`;

// Menu items
const navItem1 = document.querySelector(".active");
const navItem2 = document.querySelector(".about");
const navItem3 = document.querySelector(".work");
const navItem4 = document.querySelector(".blog");
const navItem5 = document.querySelector(".testimonials");
const navItem6 = document.querySelector(".contact");
const navItems = [navItem1, navItem2, navItem3, navItem4, navItem5, navItem6];
const mobileMenuToggle = document.querySelector(".fa-bars");
const mobileMenu = document.querySelector(".mobile-menu-overlay");
const clearMenu = document.querySelector(".fa-times");
let [a, ...others] = [...navItems];

// mobile nav items
const navItemMobile1 = document.querySelector(".home-mobile");
const navItemMobile2 = document.querySelector(".about-mobile");
const navItemMobile3 = document.querySelector(".work-mobile");
const navItemMobile4 = document.querySelector(".blog-mobile");
const navItemMobile5 = document.querySelector(".testimonials-mobile");
const navItemMobile6 = document.querySelector(".contact-mobile");
const mobileNavItems = [
  navItemMobile1,
  navItemMobile2,
  navItemMobile3,
  navItemMobile4,
  navItemMobile5,
  navItemMobile6,
];

// let counter = 0;
// for (let i = 0; i < navItems.length; i++) {
//   navItems[i].addEventListener("click", function () {
//     navItems[i].classList.add("active");
//     navItems[i].classList.remove("active");
//   });
// }

let menuCounter = 0;
mobileMenuToggle.addEventListener("click", function () {
  if (menuCounter === 0) {
    mobileMenu.classList.add("revealed");
    menuCounter++;
  } else if (menuCounter === 1) {
    mobileMenu.classList.remove("revealed");
    menuCounter = 0;
  }
});

clearMenu.addEventListener("click", function () {
  mobileMenu.classList.remove("revealed");
});

for (let i = 0; i < mobileNavItems.length; i++) {
  mobileNavItems[i].addEventListener("click", function () {
    mobileMenu.classList.remove("revealed");
  });
}

const menuHoverFunction = function () {
  a.addEventListener("mouseenter", function () {
    navItems[1].classList.add("hover");
    navItems[2].classList.add("hover");
    navItems[3].classList.add("hover");
    navItems[4].classList.add("hover");
    navItems[5].classList.add("hover");
  });
  navItem1.addEventListener("mouseout", function () {
    navItems[1].classList.remove("hover");
    navItems[2].classList.remove("hover");
    navItems[3].classList.remove("hover");
    navItems[4].classList.remove("hover");
    navItems[5].classList.remove("hover");
  });

  navItem2.addEventListener("mouseenter", function () {
    navItems[0].classList.add("hover");
    navItems[2].classList.add("hover");
    navItems[3].classList.add("hover");
    navItems[4].classList.add("hover");
    navItems[5].classList.add("hover");
  });
  navItem2.addEventListener("mouseout", function () {
    navItems[0].classList.remove("hover");
    navItems[2].classList.remove("hover");
    navItems[3].classList.remove("hover");
    navItems[4].classList.remove("hover");
    navItems[5].classList.remove("hover");
  });

  navItem3.addEventListener("mouseenter", function () {
    navItems[0].classList.add("hover");
    navItems[1].classList.add("hover");
    navItems[3].classList.add("hover");
    navItems[4].classList.add("hover");
    navItems[5].classList.add("hover");
  });
  navItem3.addEventListener("mouseout", function () {
    navItems[0].classList.remove("hover");
    navItems[1].classList.remove("hover");
    navItems[3].classList.remove("hover");
    navItems[4].classList.remove("hover");
    navItems[5].classList.remove("hover");
  });

  navItem4.addEventListener("mouseenter", function () {
    navItems[0].classList.add("hover");
    navItems[1].classList.add("hover");
    navItems[2].classList.add("hover");
    navItems[4].classList.add("hover");
    navItems[5].classList.add("hover");
  });
  navItem4.addEventListener("mouseout", function () {
    navItems[0].classList.remove("hover");
    navItems[1].classList.remove("hover");
    navItems[2].classList.remove("hover");
    navItems[4].classList.remove("hover");
    navItems[5].classList.remove("hover");
  });

  navItem5.addEventListener("mouseenter", function () {
    navItems[0].classList.add("hover");
    navItems[1].classList.add("hover");
    navItems[2].classList.add("hover");
    navItems[3].classList.add("hover");
    navItems[5].classList.add("hover");
  });
  navItem5.addEventListener("mouseout", function () {
    navItems[0].classList.remove("hover");
    navItems[1].classList.remove("hover");
    navItems[2].classList.remove("hover");
    navItems[3].classList.remove("hover");
    navItems[5].classList.remove("hover");
  });

  navItem6.addEventListener("mouseenter", function () {
    navItems[0].classList.add("hover");
    navItems[1].classList.add("hover");
    navItems[2].classList.add("hover");
    navItems[3].classList.add("hover");
    navItems[4].classList.add("hover");
  });
  navItem6.addEventListener("mouseout", function () {
    navItems[0].classList.remove("hover");
    navItems[1].classList.remove("hover");
    navItems[2].classList.remove("hover");
    navItems[3].classList.remove("hover");
    navItems[4].classList.remove("hover");
  });
};
menuHoverFunction();
