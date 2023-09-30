const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
const output = document.querySelector("#name-output");

input.addEventListener("input", current);

function current(event) {
  if (input.value.trim() === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = input.value.trim();
  }
}
