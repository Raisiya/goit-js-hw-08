// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItem(galleryItems) {
    return galleryItems.map((image) => {
    return `
   <a class="gallery__item"
    href="${image.original}">
  <img class="gallery__image"
   src="${image.preview}"
   alt="${image.description}" />
</a>`;
    }).join('');
}
new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
