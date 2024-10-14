// ===============ELEMENT===============
const cardContainerEls = document.querySelectorAll('#quote-container .row .card-container');
// ===============ELEMENT===============






// ===============VALUE===============
let positionBottom_cardContainerEls = [];
// ===============VALUE===============







// ===============CODE===============
// ambil posisi bottom pada semua elemen cardContainerEl
cardContainerEls.forEach((cardContainerEl) => {
    positionBottom_cardContainerEls.push(cardContainerEl.getBoundingClientRect().bottom + window.scrollY);
});



document.addEventListener('scroll', () => {
    cardContainerEls.forEach((cardContainerEl, index) => {
        // ambil viewport, ini adalah tinggi browser terhadapat tinggi monitor
        const heightViewport = window.innerHeight;
        // ambil posisi scrollY
        const positionScrollY = window.scrollY;


        // saya menemukan bug, animasi tidak berjalan, dan saya menduga kode ini lah penyebabbnya
        // saya merasa jika kode dibawah dilakukan dengan sangat cepat, dan tanpa ada delay, maka animasi seketika error tidak berjalan
        // oleh karena itu saya memberikan delay 50ms, walaupun 10ms itu cepat, tapi membantu untuk mengatasi bug ini
        setTimeout(() => {
            // jika heightViewport + positionScrollY >= positionBottom_cardContainerEls[index]
            // maka kita telah sampai di tempat elemen berada
            // maka kita berikan dia class show, agar animasi untuk memunculkan cardContainerEl bekerja
            if(heightViewport + positionScrollY >= positionBottom_cardContainerEls[index]) {
                cardContainerEl.classList.remove('hidden');
                cardContainerEl.classList.add('show');

                // untuk elemen img
                cardContainerEl.firstElementChild.classList.remove('hidden');
                cardContainerEl.firstElementChild.classList.add('show');

                // untuk elemen p
                cardContainerEl.lastElementChild.classList.remove('hidden');
                cardContainerEl.lastElementChild.classList.add('show');
            } else {
                cardContainerEl.classList.remove('show');
                cardContainerEl.classList.add('hidden');

                // untuk elemen img
                cardContainerEl.firstElementChild.classList.remove('show');
                cardContainerEl.firstElementChild.classList.add('hidden');

                // untuk elemen p
                cardContainerEl.lastElementChild.classList.remove('show');
                cardContainerEl.lastElementChild.classList.add('hidden');
            }
        }, 0);


    })
})
// ===============CODE===============




