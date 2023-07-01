import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGalleryItemsLightbox = document.querySelector('.gallery');

const markupGalleryItemsLightbox = galleryItems.map(
  ({ preview, original, description }) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li> `
);

containerGalleryItemsLightbox.insertAdjacentHTML('beforeend', markupGalleryItemsLightbox.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});