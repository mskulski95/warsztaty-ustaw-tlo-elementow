console.log('Warsztat - Ustaw tło elementów');

const setBackground = () => {
    p1 = document.querySelector('.first');
    p2 = document.querySelector('.last');

    p1.classList.add('bg-first');
    p2.classList.add('bg-last');
}

let btnBackground = document.getElementById('btn-background');

btnBackground.addEventListener('click', setBackground);