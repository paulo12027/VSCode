function mostrarDados(){
   
    let nome = (document.querySelector('#nome').value)
    let idade = (document.querySelector('#idade').value)
    let endereco = (document.querySelector('#endereco').value)

    let frase = 'Olá, seu nome é '+nome+'! Você tem '+idade+' e mora em '+endereco+' '
 
    document.querySelector('#resultado').innerHTML = frase
}