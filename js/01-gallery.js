import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", createMarkupItems(galleryItems));
galleryList.addEventListener("click", handlerClick);

function handlerClick(ev) {
  ev.preventDefault();

  if (ev.target !== ev.currentTarget) {
    const image = galleryItems.find(
      ({ original }) => original === ev.target.dataset.source
    );
    const imageAdresddress = image.original;
    const instance = basicLightbox.create(`
    <img src="${imageAdresddress}" width="800" height="600">
`);
    // const instance = basicLightbox.create(createModalMarkup(image));
    instance.show();
  }
}
// function createModalMarkup({ original, description } = {}) {
//   return ` <img
//       src="${original}"
//       data-source="${original}"
//       alt="${description}"/>`;
// }

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
