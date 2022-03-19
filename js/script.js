function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
const headerBottom = document.querySelector(".header-bottom");
const menuList = document.querySelector(".menu__list");
const body = document.body;

headerBurger.onclick = function () {
  headerBurger.classList.toggle("active");
  headerMenu.classList.toggle("active");
  headerBottom.classList.toggle("active");
  body.classList.toggle("lock");
};

menuList.onclick = function () {
  menuList.classList.remove("active");
  headerBottom.classList.remove("active");
  body.classList.toggle("lock");
};
