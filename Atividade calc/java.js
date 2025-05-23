function calculo(){
    const nome = (document.getElementById("nome").value);
    const salario = Number(document.getElementById("salario").value);
    const venda = Number(document.getElementById("venda").value);
    const comissao = Number(document.getElementById("comissao").value);

    const valorComissao = (venda * (comissao / 100));
    const valorBruto = salario + valorComissao;
    const valorDesconto = valorBruto * 0.08;
    const valorLiquido = valorBruto - valorDesconto;

    document.getElementById("resultado").innerHTML = `Funcionário: ${nome}<br>
    Salário Base: ${salario.toFixed(2)}<br> 
    Comissão: ${valorComissao.toFixed(2)}<br> 
    Salário Bruto: ${valorBruto.toFixed(2)}<br> 
    Desconto INSS: ${valorDesconto.toFixed(2)}<br> 
    <strong>Salário Liquido: ${valorLiquido.toFixed(2)}</strong>`;

    resultado.style.backgroundColor = "green"

}