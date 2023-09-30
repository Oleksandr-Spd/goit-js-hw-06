
const category = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${category}`);

const titles = document.querySelectorAll("h2")
titles.forEach((title) => {
  console.log('Category:', title.textContent);
  console.log('Elements:', title.nextElementSibling.children.length);
});