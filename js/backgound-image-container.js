// ===========FUNCTION===========
const getUrlImgs = (name) => {
    return `url('../imgs/${name.toLowerCase()}.jpg')`;
}
// ===========FUNCTION===========



// ===========nilai===========
const dataHero = [
    'Xborg',
    'Gusion',
    'Ling',
    'Yuzhong',
    'Terizla',
    'Khaleed',
    'Harith',
    'Chou',
    'Esmeralda',
    'Barats',
    'Uranus',
    'Fanny',
    'Claude',
    'Beatrix',
    'Thamuz',
    'Sun',
    'Aldous',
    'Pharsa',
    'Kadita',
];
let indexDataHero = 1;
let indexStringNama = 0;
// ===========nilai===========




// ===========ELEMENT===========
const backgroundImageContainerEl = document.getElementById('background-image-container');
const heroNameEl = document.querySelector('.hero-name');
// ===========ELEMENT===========




// ===========code===========

// digunakan untuk teks berjalan
setTimeout(() => {
    const interval1 = setInterval(() => {
        if(indexStringNama === dataHero[0].length) {
            indexStringNama = 0; 
            clearInterval(interval1);
            return;
        }
       
        heroNameEl.textContent += dataHero[0][indexStringNama];
        indexStringNama++;
    }, 200);
}, 1000);


// digunakan untuk mengganti background image
setInterval(() => {
    if(indexDataHero === dataHero.length) indexDataHero = 0;
    
    heroNameEl.textContent = '';
    backgroundImageContainerEl.style.backgroundImage = getUrlImgs(dataHero[indexDataHero]);


    const timeOut1 = setTimeout(() => {

        const interval1 = setInterval(() => {
            if(indexStringNama === dataHero[indexDataHero].length) {
                indexStringNama = 0; 
                indexDataHero++;
                clearInterval(interval1);
                clearTimeout(timeOut1);
                return;
            }

            console.log(indexDataHero);
            heroNameEl.textContent += dataHero[indexDataHero][indexStringNama];
            indexStringNama++;
        }, 200);

    }, 3000);
    
}, 7000);
// ===========code===========







