import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const template = ({
  preview,
  original,
  description
}) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

const render = (array) => {
  const items = array.reduce((acc, item) => (acc += template(item)), '');
  gallery.innerHTML = items;
};

render(galleryItems);

new SimpleLightbox('.gallery a', {
  captionDelay: 100
})