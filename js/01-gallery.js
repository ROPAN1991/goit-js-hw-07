import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const template = ({
  preview,
  original,
  description,
}) => `<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`;
const render = (array) => {
  const items = array.reduce((acc, item) => (acc += template(item)), "");
  gallery.innerHTML = items;
};

render(galleryItems);

const links = Array.from(document.querySelectorAll(".gallery__link"));
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const item = galleryItems.find(
      (el) => el.original === e.target.getAttribute("data-source")
    );
    basicLightbox.create(template(item)).show();
  });
});

// --------------------------------код подругі

// const gallery = document.querySelector(".gallery");

// const imagesSet = createImagesMarkup(galleryItems);

// gallery.insertAdjacentHTML("beforeend", imagesSet);

// function createImagesMarkup(items) {
//   return items
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//     <a class="gallery__link" href="${original}">
//       <img
//         class="gallery__image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//       />
//     </a>
//   </div>`;
//     })
//     .join("");
// }
