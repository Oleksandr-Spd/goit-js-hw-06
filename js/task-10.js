function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("#controls button[data-create]");
const destroy = document.querySelector("#controls button[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  let size = 30;
  let amount = Number(input.value);
  for (let i = 1; i <= amount; i += 1) {
    const element = document.createElement("div");
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();
    boxes.append(element);
    size += 10;
  }
}

function destroyBoxes() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}
