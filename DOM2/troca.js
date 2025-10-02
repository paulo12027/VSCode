function idade() {
    let idade = parseInt(document.querySelector('#Idade').value);
    let mensagem = "";
    
    if (idade <= 15) {
      mensagem = "Você ainda não pode votar.";
    } else {
      mensagem = "Você pode até ser preso fi kkk";
    }
  
    document.querySelector('#resultado').innerHTML = `<p>${mensagem}</p>`;
  }
  
