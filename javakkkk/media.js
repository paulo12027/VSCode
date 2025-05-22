function calculo(){
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);
    const resultado = document.getElementById("resultado");

    const valorMedia = (nota1 + nota2 + nota3) / 3;

    resultado.innerHTML = `A média é de: ${valorMedia.toFixed(1)}`;


    if (valorMedia >= 7) {
        document.getElementById("resultado").innerHTML = `<p> media: ${valorMedia}<br> status: Aprovado</p>`;
        resultado.style.color = "green";
        resultado.style.fontWeight = "bold";
        
    } else {
        document.getElementById("resultado").innerHTML = `<p>media: ${valorMedia} status: Reprovado</p>`;
        resultado.style.color = "red";
        resultado.style.fontWeight = "bold";
    }
}
    
