document.querySelector("#exemplo").innerText = "Hoje é quint"

document.querySelector(".lista").textContent = "semana sem feriado disgraça"

document.querySelector("button").innerHTML = "<h2>amanhã é sexta</h2>"

function mudarTexto(botao) {
    document.querySelector("button").textContent = "você passou o mouse aqui"
}
 
function voltarTexto(botao) {
    document.querySelector("button").textContent = "passe o mouse aqui"
}
