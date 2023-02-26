const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    window.alert("Всі поля повинні бути заповнені!");
  }
  const obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);
  formEl.reset();
});
