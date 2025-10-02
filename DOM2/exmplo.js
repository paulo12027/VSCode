let pai = document.querySelector('.pai')

pai.children[0].innerHTML = "Primeiro Filho Alterado"
pai.children[1].innerHTML = "Segundo Filho Alterado"
pai.lastElementChild.innerHTML = "Último Filho Alterado"

//let paragrafo = document.createElement('p')
//paragrafo.innerHTML = "Iscrevinhando paragrafo"
//document.body.appendChild(paragrafo)

//cria o paragrafo
let paragrafo = document.createElement('p')
paragrafo.innerText = "Este paragrafo foi inserido na Linha 2"
//<p> Este paragrafo foi inserido na linha 2 </p>
//coloca um texto
p.innerText = "Este paragrafo foi inserido na linha 2"
// selecione a div com id "linha2"
let linha2 = document.getElementById('linha2')
//adiciona o paragrafo como o filho dess div
linha2.prepend(p)