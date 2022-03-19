function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  // let вместо var
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

// везде const, т.к. значения переменных в дальнейшем не будут меняться
// используй camelCase для именования переменных (по бэму это разрешается) - headerBurger
let header__burger = document.querySelector(".header__burger");
let header_menu = document.querySelector(".header__menu");
let header = document.querySelector(".header");
// body можно получить через document.body
let body = document.querySelector("body");
let header__list = document.querySelector(".header__list");

// можно ещё использовать addEventListener('click', function() {}) - таким образом можно повесить несколько обработчиков событий
header__burger.onclick = function () {
  header__burger.classList.toggle("active");
  header_menu.classList.toggle("active");
  header.classList.toggle("active");
  body.classList.toggle("lock");
};

header__list.onclick = function () {
  header__list.classList.remove("active");
  header.classList.remove("active");
  body.classList.toggle("lock");
};
