const lightModeBtn = document.querySelector(".light-mode-btn");
const darkModeBtn = document.querySelector(".dark-mode-btn");

lightModeBtn.addEventListener("click", setDarkMode);
darkModeBtn.addEventListener("click", setLightMode);

function setDarkMode() {
  setUserTheme("dark");
}

function setLightMode() {
  setUserTheme("light");
}

function setUserTheme(newTheme) {
  document.documentElement.setAttribute("data-theme", newTheme);
}
