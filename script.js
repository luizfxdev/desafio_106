// Função principal para encontrar números perdidos em uma sequência
function encontrarNumerosPerdidos(sequencia) {
    // Verifica se a sequência está vazia
    if (sequencia.length === 0) return [];

    // Encontra o maior número na sequência
    const maiorNumero = Math.max(...sequencia);
    // Cria um conjunto com os números presentes para busca eficiente
    const numerosPresentes = new Set(sequencia);
    const numerosPerdidos = [];

    // Percorre todos os números de 1 até o maior número da sequência
    for (let i = 1; i <= maiorNumero; i++) {
        // Se o número não estiver no conjunto, adiciona aos perdidos
        if (!numerosPresentes.has(i)) {
            numerosPerdidos.push(i);
        }
    }

    return numerosPerdidos;
}

// Função para formatar a saída dos números perdidos
function formatarResultado(numeros) {
    if (numeros.length === 0) {
        return "Nenhum número perdido encontrado! A sequência está completa.";
    } else {
        return `[${numeros.join(', ')}]`;
    }
}

// Função para converter a string de entrada em um array de números
function processarEntrada(entrada) {
    try {
        // Remove espaços e divide por vírgulas
        return entrada.split(',')
            .map(item => item.trim())
            .filter(item => item !== '')
            .map(num => parseInt(num, 10))
            .filter(num => !isNaN(num));
    } catch (e) {
        return [];
    }
}

// Função principal executada quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
    const inputSequencia = document.getElementById('sequence-input');
    const botaoEncontrar = document.getElementById('find-button');
    const botaoResetar = document.getElementById('reset-button');
    const resultadoDiv = document.getElementById('result');

    // Evento de clique no botão "Encontrar Números"
    botaoEncontrar.addEventListener('click', function () {
        // Processa a entrada do usuário
        const sequencia = processarEntrada(inputSequencia.value);

        // Encontra os números perdidos
        const numerosPerdidos = encontrarNumerosPerdidos(sequencia);

        // Exibe o resultado formatado
        resultadoDiv.textContent = formatarResultado(numerosPerdidos);
        resultadoDiv.classList.add('highlight');

        // Remove a classe de destaque após a animação
        setTimeout(() => {
            resultadoDiv.classList.remove('highlight');
        }, 1000);
    });

    // Evento de clique no botão "Resetar"
    botaoResetar.addEventListener('click', function () {
        inputSequencia.value = '';
        resultadoDiv.textContent = '';
    });

    // Exemplo inicial no campo de entrada
    inputSequencia.value = '1, 2, 3, 5, 6, 7, 9, 10';
});