// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const ulGallery = document.querySelector(".gallery");
const createMakup = createFotoGalery(galleryItems);

ulGallery.insertAdjacentHTML('beforeend', createMakup);

function createFotoGalery(galleryItems) {
    return galleryItems
        .map(({description, original, preview}) => {
        return `
        <li class="gallery__item">
        <a 
            class="gallery__link" 
            href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
        </li>
        `;
        })
        .join(""); 
};

new SimpleLightbox('.gallery a', { 
    /* options */ 
    captionsData:'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});



console.log(galleryItems);
