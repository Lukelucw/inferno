function calcularMedia() {
    // Capturando os valores dos inputs
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

    // Calculando a média
    var media = (nota1 + nota2 + nota3) / 3;

    // Exibindo a média na página
    var resultado = document.getElementById('resultado');
    resultado.textContent = 'Média: ' + media.toFixed(2);

    // Verificando a situação do aluno
    var situacao = document.getElementById('situacao');
    if (media >= 7) {
        situacao.textContent = 'Situação: Aprovado';
    } else if (media >= 5) {
        situacao.textContent = 'Situação: Em recuperação';
    } else {
        situacao.textContent = 'Situação: Reprovado';
    }
}