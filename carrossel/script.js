let tempo = 2500; // tempo de transição
let imagemAtual = 0; // imagem atual do carrossel
let images = document.querySelectorAll(".slider img"); // todas as imagens
let maximo = images.length; // quantidade de imagens
 
function passarImagem() {
    images[imagemAtual].classList.remove('selected');
    imagemAtual++;
    if (imagemAtual >= maximo) {
        imagemAtual = 0;
    }
    images[imagemAtual].classList.add('selected');
}
 
function start() {
    setInterval(passarImagem, tempo);
}
 
document.addEventListener("DOMContentLoaded", start);