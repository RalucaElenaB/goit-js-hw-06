const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const galleryItems = images
  .map(
    (image) => `
  <li class="gallery-item">
    <img src="${image.url}" alt="${image.alt}">
  </li>
`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryItems);

// "beforebegin" - înaintea lui elem(Inserează HTML-ul înainte de începutul elementului curent.); funcționează numai dacă elem este deja în arborele DOM.
// "afterbegin" - înăuntrul lui elem, în fața tuturor copiilor săi ( Inserează HTML-ul la începutul conținutului elementului curent.)
// "beforeend" - înăuntrul lui elem, după toți copiii (Inserează HTML-ul la sfârșitul conținutului elementului curent.)
// "afterend" - după elem(Inserează HTML-ul după elementul curent.); funcționează numai dacă elem este deja în arborele DOM.
