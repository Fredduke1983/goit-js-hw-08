// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

function createHTMLMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) =>
      galleryRef.insertAdjacentHTML(
        'beforeend',
        `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
      )
    )
    .join('');
}
createHTMLMarkup(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', {});

// Change code below this line

console.log(galleryItems);
