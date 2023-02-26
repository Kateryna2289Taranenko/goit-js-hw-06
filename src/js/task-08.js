const formEl = document.querySelector(".login-form");
formEl.addEventListener(
  "submit",

  function formSubmitHandler(event) {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    if (!email || !password) {
      return alert("Всі поля повинні бути заповнені!");
    }
    console.log({ email: email, password: password });
    formEl.reset();
  }
);
