let botoes = document.querySelectorAll('.botao-expandir-retrair');

botoes.forEach(function (botao) {
    botao.addEventListener('click', function (e) {
        let paragrafo = e.currentTarget.parentElement;
        paragrafo.classList.toggle('expandido');

        if (paragrafo.classList.contains('expandido')) {
            e.currentTarget.innerHTML = '-';
        } else {
            e.currentTarget.innerHTML = '+';
        }
    });
});