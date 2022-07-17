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
    const items = array.reduce((acc, item) => (acc += template(item)), '');
    gallery.innerHTML = items;
};

render(galleryItems);

gallery.addEventListener('click', e => {
    const item = galleryItems.find(el => el.original === e.target.getAttribute('data-source'))

    const instance = basicLightbox.create(template(item), {
        onShow: () => {
            document.addEventListener('keydown', closeByEscape)
        },
        onClose: () => {
            document.removeEventListener('keydown', closeByEscape)
        }
    })

    function closeByEscape(e) {
        if (e.key === 'Escape') {
            console.log('|eee')
            instance.close()
        }
    }

    instance.show()
})

const links = Array.from(document.querySelectorAll(".gallery__link"));

links.forEach((link) => link.addEventListener('click', (e) => e.preventDefault()));