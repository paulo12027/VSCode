function imc() {
    const nome = document.querySelector('#nome').value;
    const altura = parseFloat(document.querySelector('#altura').value);
    const peso = parseFloat(document.querySelector('#peso').value);
    const resultado = document.querySelector('#result');
 
    const imcValue = (peso / (altura * altura)).toFixed(2);
    resultado.textContent = `${nome}, seu IMC é ${imcValue}`;
 
    if (nome !== '' && altura !== '' && peso !== ''){
        let valorIMC = (peso / (altura * altura))
 
        if (valorIMC < 18.5) {
            tipoIMC = 'Abaixo do peso'
        }else if(valorIMC < 24.9) {
            tipoIMC = 'No Peso ideal'
        }else if(valorIMC < 29.9){
            tipoIMC = 'Pesadin fi'
        }else if(valorIMC < 34.9){
            tipoIMC = 'Obesidade tipo 1'
        }else if(valorIMC < 39.9){
            tipoIMC = 'Obesidade parte 2'
        }else {
            tipoIMC = 'Obesidade 3 o retorno'
        }
        resultado.innerHTML = `${nome} seu IMC é ${valorIMC.toFixed(2)} e você está ${tipoIMC}`
    } else{
        resultado.innerHTML = "Preencha todos os campos"

    }
}
 