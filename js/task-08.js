const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    const obj = {
      email: email.value,
      password: password.value,
    };
    console.log(obj);
  }
  event.currentTarget.reset();
}
