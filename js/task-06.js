const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  if (input.value.trim().length === Number(input.getAttribute("data-length"))) {
    apdateClassEl("valid", "invalid");
  } else {
    apdateClassEl("invalid", "valid");
  }
});
function apdateClassEl(a, b) {
  input.classList.add(a);
  input.classList.remove(b);
}
