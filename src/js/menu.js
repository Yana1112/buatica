
const darkOverlay = $(".dark-overlay");
const mobileMenu = $(".mobile-menu");

$(document).on("click", ".mobile-menu__btn", handleMenu);
$(document).on("click", ".is-submenu", handleToggleMenu);

function handleMenu(e) {
  e.preventDefault();
  darkOverlay.toggleClass("visible");
  mobileMenu.toggleClass("visible");
}

function handleToggleMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this.parent(".has-submenu").toggleClass("opened");
  $this.next("ul").slideToggle(500, function () {
    console.log(this);
    $(this).find(".has-submenu").removeClass("opened").children("ul").hide();
  });

  $this
    .parent(".has-submenu")
    .toggleClass("opened")
    .siblings("li")
    .removeClass("opened")
    .find("ul")
    .slideUp();
}

function resetMobileMemu() {
  darkOverlay.removeClass("visible");
  mobileMenu.removeClass("visible");
  $(".mobile-navigation  .has-submenu").removeClass("opener").find("ul").hide();
}

// /* ========================== */

function initMobile() {

}

function initDesktop() {
  resetMobileMemu();

}

ssm.addState({
  id: "tablet",
  query: "(max-width: 1200px)",
  onEnter: function () {
    initMobile();
  },
});

ssm.addState({
  id: "desktop",
  query: "(min-width: 1200px)",
  onEnter: function () {
    initDesktop();
  },
});
