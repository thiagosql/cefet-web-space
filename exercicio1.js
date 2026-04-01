
let botaoCalcular = document.querySelector('#calcular');

botaoCalcular.addEventListener('click', function () {
    let G = document.querySelector('#constante').value;
    let M1 = document.querySelector('#massa1').value;
    let M2 = document.querySelector('#massa2').value;
    let d = document.querySelector('#distancia').value;

    let F = (G * M1 * M2) / (d * d);
    document.querySelector('#resultado').value = F;
});
