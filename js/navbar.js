const aEls = document.querySelectorAll('nav ul li a');

aEls.forEach((aEl, index) => {
    aEl.addEventListener('click', (e) => {
        aEls.forEach((_aEl) => { _aEl.classList.remove('select') });
        aEl.classList.add('select');
    })
})