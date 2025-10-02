const valor = document.querySelector("#valor")

const menos = document.querySelector(".menos")
const reset = document.querySelector(".reset")
const mais = document.querySelector(".mais")

let contador = 0

function aumentar(){
    contador++;
    valor.innerText = contador;
}
function diminuir(){
    contador --;
    valor.innerText = contador;
}
function resetar(){
    contador = 0;
    valor.innerText = contador;
}