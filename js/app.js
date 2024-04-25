function  alterarStatus (id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let Botao = gameClicado.querySelector('.dashboard__item__button');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        Botao.classList.remove('dashboard__item__button--return');
        Botao.textContent = 'Alugar';

    } else { 
        imagem.classList.add('dashboard__item__img--rented')
        Botao.textContent = 'Devolver';
        Botao.classList.add('dashboard__item__button--return');

    }
}