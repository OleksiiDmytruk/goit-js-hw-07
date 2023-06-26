import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", createMarkupItems(galleryItems));
galleryList.addEventListener("click", handlerClick);

function handlerClick(ev) {
  ev.preventDefault();

  if (ev.target.classList.contains("gallery__image")) {
    const image = galleryItems.find(
      ({ original }) => original === ev.target.dataset.source
    );
    const imageAddress = image.original;
    const instance = basicLightbox.create(
      `
    <img src="${imageAddress}" width="800" height="600">`,
      {
        onShow: () => {
          document.addEventListener("keydown", closeModal);
        },
        onClose: () => {
          document.removeEventListener("keydown", closeModal);
        },
      }
    );
    instance.show();

    function closeModal(ev) {
      if (ev.code === "Escape") {
        instance.close();
      }
    }
  }
}

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
