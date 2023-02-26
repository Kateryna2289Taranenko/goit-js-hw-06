function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtnEl = document.querySelector(".change-color");
const backgroundColorEl = document.querySelector(".color");
changeColorBtnEl.addEventListener("click", (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  backgroundColorEl.textContent = getRandomHexColor();
});
