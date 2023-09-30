let value = document.querySelector("#value");
let counterValue = 0;
const decrement = document.querySelector(
  "#counter button[data-action=decrement]"
);
const increment = document.querySelector(
  "#counter button[data-action=increment]"
);

decrement.addEventListener("click", minus);
increment.addEventListener("click", plus);

function plus(event) {
  counterValue++;
  value.textContent = counterValue;
}

function minus(event) {
  counterValue--;
  value.textContent = counterValue;
}
