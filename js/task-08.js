const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }

  const obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);

  event.currentTarget.reset();
}
