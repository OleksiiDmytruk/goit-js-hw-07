import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", createMarkupItems(galleryItems));
galleryList.addEventListener("click", handlerClick);

function handlerClick(ev) {}

function createMarkupItems(arr) {
  return arr
    .map(
      ({ preview, original, description }) => ` 
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</li>`
    )
    .join("");
}
