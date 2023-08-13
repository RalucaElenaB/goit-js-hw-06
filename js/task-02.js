//querySelector
//map
//createElement
//textContent
//classList.add()
//outerHTML
//innerHTML
//join()
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients"); // selectează ul#ingredients

let liElements = ingredients.map((ingredient) => {
  let liElement = document.createElement("li"); // creează un element <li>
  liElement.textContent = ingredient; // setează textul elementului <li>
  liElement.classList.add("item"); // adaugă clasa "item" elementului <li>
  return liElement.outerHTML; // obține reprezentarea HTML a elementului <li>
});
ulIngredients.innerHTML = liElements.join(""); // setează conținutul HTML al ul#ingredients
