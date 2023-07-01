import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGalleryItems = document.querySelector('.gallery');
const markupGalleryItems = galleryItems.map(
  ({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          width="200"
          height="200"
        />
      </a>
    </li>
  `
);

containerGalleryItems.insertAdjacentHTML('beforeend', markupGalleryItems.join(''));
containerGalleryItems.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault(); // Забороняємо перенаправлення посилання
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(
    `<img width='1400' height='900' src='${evt.target.dataset.source}'>`
  );

  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });

  instance.show();
}
