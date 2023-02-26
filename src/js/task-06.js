const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", () => {
  inputEl.classList.toggle(
    "invalid",
    inputEl.value.length !== Number(inputEl.getAttribute("data-length"))
  );
  inputEl.classList.toggle(
    "valid",
    inputEl.value.length === Number(inputEl.getAttribute("data-length"))
  );
});
