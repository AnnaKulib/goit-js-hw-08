// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const listGalley = document.querySelector('.gallery');

const itemOfGallery = galleryItems.map((item) =>
  ` <li>
        <a class="gallery__item" href=${item.original}>
            <img class="gallery__image" src=${item.preview} alt=${item.description} />
        </a>
    </li>`)
  .join(' ');

  listGalley.insertAdjacentHTML('afterbegin', itemOfGallery);

  let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250,  captionsData: 'alt'});