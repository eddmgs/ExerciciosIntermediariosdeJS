const btnMenos = document.getElementById("btnMenos");
const btnMais = document.getElementById("btnMais");
const btnZerar = document.getElementById("btnZerar");
const p = document.getElementById("contador");

let contador = 0;

btnMenos.addEventListener('click', function () {
    p.innerHTML = --contador;
});

btnMais.addEventListener('click', function () {
    p.innerHTML = ++contador;
});

btnZerar.addEventListener('click', function () {
    p.innerHTML = contador = 0;
});