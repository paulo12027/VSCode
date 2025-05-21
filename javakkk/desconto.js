function calcular (){
    const preco = Number(document.getElementById("preco").value);
    const desc = Number(document.getElementById("desc").value);
    const total = document.getElementById("resultado");

    const valorDesconto = (preco * desc / 100);
    const precoFinal = preco - valorDesconto;

    resultado.innerHTML = `O valor final com desconto é R$ ${precoFinal.toFixed(2)}`;
    
}