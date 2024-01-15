// ===============ELEMENT===============
const aEls_index = document.querySelectorAll('nav ul li a');
const backgroundImageContainerEl_index = document.getElementById('background-image-container');
const aboutContainerEl_index = document.getElementById('about-container');
const quoteContainerEl_index = document.getElementById('quote-container');
// ===============ELEMENT===============


const removeAllClassSelect_in_aEls_index = () => {
    aEls_index.forEach((aEl) => { aEl.classList.remove('select') });
}


// ===============ELEMENT===============
const positionBottom_backgroundImageContainerEl_index = backgroundImageContainerEl_index.getBoundingClientRect().bottom + window.scrollY;
const positionBottom_aboutContainerEl_index = aboutContainerEl_index.getBoundingClientRect().bottom + window.scrollY;
const positionBottom_quoteContainerEl_index = quoteContainerEl_index.getBoundingClientRect().bottom + window.scrollY;
// ===============ELEMENT===============




// ===============CODE===============
document.addEventListener('scroll', () => {
    const positionScrollY = window.scrollY;
    
    // posisi ini akan berada di wilayah backgroundImageContainerEl_index
    if(positionScrollY < positionBottom_backgroundImageContainerEl_index) {
        // hapus semua class yang mengandung select di semua elemen a
        removeAllClassSelect_in_aEls_index();
        // tambahkan class di aEls_index index 0
        aEls_index[0].classList.add('select');
    } 

    // posisi ini akan berada di wilayah aboutContainerEl_index
    else if(positionScrollY < positionBottom_aboutContainerEl_index) {
        // hapus semua class yang mengandung select di semua elemen a
        removeAllClassSelect_in_aEls_index();
        // tambahkan class di aEls_index index 1
        aEls_index[1].classList.add('select');
    }

    // posisi akan berada di wilayah quoteContainerEl_index
    else if(positionScrollY < positionBottom_quoteContainerEl_index) {
        // hapus semua class yang mengandung select di semua elemen a
        removeAllClassSelect_in_aEls_index();
        // tambahkan class di aEls_index index 2
        aEls_index[2].classList.add('select');
    }
});
// ===============CODE===============