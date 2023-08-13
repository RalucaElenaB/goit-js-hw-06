//document.querySelector
//categories.children.length
//headerItems
//querySelectorAll
//headerItems[0]
//innerHTML
//listItems.length

let categories = document.querySelector("#categories"); //metoda querySelector() găseste primul element din document care are atributul id cu valoarea "categories"
console.log(`Number of categories: ${categories.children.length}`); //calculează și afișează in consola câte (sub)categorii există sub elementul "categories"

for (let category of categories.children) {
  let headerItems = category.querySelectorAll("h2"); //se obține o colecție de toate elementele <h2> din categoria curentă (adică din categoria pe care o parcurge ciclul for...of).
  console.log(`Category: ${headerItems[0].innerHTML}`); // afiseaza numele categoriei- un mesaj care conține textul "Category: " urmat de conținutul HTML al primului element <h2> din categoria curentă
  let listItems = category.querySelectorAll("li"); //se obține o colecție de toate elementele <li> (iteme din listă) din categoria curentă
  console.log(`Elements: ${listItems.length}`); //afișează în consolă un mesaj care conține textul "Elements: " urmat de numărul de elemente <li> din categoria curentă (afișează câte elemente există în lista fiecărei categorii)
}
