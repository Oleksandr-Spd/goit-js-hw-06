const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  input.classList.add("invalid");

  if (input.value.trim().length === Number(input.getAttribute("data-length"))) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
