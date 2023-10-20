ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.main, .conteudo', { origin: 'top' });
ScrollReveal().reveal('.box, .box-2', { origin: 'bottom' });
ScrollReveal().reveal('.middle-page, .left-side', { origin: 'left' });
ScrollReveal().reveal('.right-side, .content', { origin: 'right' });