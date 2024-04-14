const ligthModeBtn = document.querySelector(".light-mode-btn");
const darkModeBtn = document.querySelector(".dark-mode-btn");






ligthModeBtn.addEventListener("click",setDarkMode);
darkModeBtn.addEventListener("click",setLigthMode);


function setDarkMode() {
    setUserTheme("dark")
}