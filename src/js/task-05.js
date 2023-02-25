const inputEl = document.querySelector("#name-input");
const outputEL = document.querySelector("#name-output");
inputEl.addEventListener("input", changeName);
function changeName(event) {
  outputEL.textContent = event.currentTarget.value.trim();
  if (outputEL.textContent.length === 0) {
    outputEL.textContent = "Anonymous";
  }
}
