const hamburgerWapper = document.querySelector('.hamburguesa-wrapper');

// Aggiungi un evento clic al documento:
//l toggle metodo dell'oggetto classList attiva/disattiva una determinata classe CSS di un elemento
hamburgerWapper.addEventListener('click', () => {
    hamburgerWapper.classList.toggle('active')
});

