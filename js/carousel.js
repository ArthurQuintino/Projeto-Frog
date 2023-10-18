
const carousel = window.document.querySelector('.js-carousel');
const carouselSlides = carousel.querySelector('.js-carousel-slides');
const carouselButtonNext = carousel.querySelector('.js-carousel-button-next');
const carouselButtonPrevious = carousel.querySelector('.js-carousel-button-previous');

/**
 * @param {HTMLElement} element
 * @returns {number}
 */
function getWidth(element) {
    const { width } = element.getBoundingClientRect();
    return width;
}

/**
 * @typedef {object} State
 * @property {number} currentPage
 * @property {number} pages
 */

const state = {
    currentPage: 0,
    pages: Math.ceil(getWidth(carouselSlides) / getWidth(carousel)),
};

/** @param {State} state */
function updateCarousel(state) {
    if (state.currentPage === 0) {
        // Esconder o botão "previous"
        carouselButtonPrevious.style.display = 'none';
    } else {
        carouselButtonPrevious.style.display = 'block';
    }

    if (state.currentPage >= state.pages - 1) {
        carouselButtonNext.style.display = 'none';
    } else {
        carouselButtonNext.style.display = 'block';
    }

    carouselSlides.style.transform = `translateX(-${state.currentPage * getWidth(carousel)}px)`;
}

updateCarousel(state);

carouselButtonNext.addEventListener('click', () => {
    state.currentPage++;

    updateCarousel(state);
});

carouselButtonPrevious.addEventListener('click', () => {
    state.currentPage--;

    updateCarousel(state);
});

window.addEventListener('resize', () => {
    const pages = Math.ceil(getWidth(carouselSlides) / getWidth(carousel));

    if (state.currentPage > pages - 1) {
        state.currentPage--;
    }

    state.pages = pages;

    updateCarousel(state);
});
