const enviarNome = document.querySelector('button')
 
enviarNome.addEventListener('click',() =>{
    /*pegar o input */
    let input = document.querySelector('input')
    /*armazenar o valor do input */
    let nome = input.value
    /*criando um paragrafo */
    let nomeUsuario = document.createElement('p')
    nomeUsuario.innerHTML = nome
    document.body.appendChild(nomeUsuario)
})





