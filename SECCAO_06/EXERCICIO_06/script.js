function verificarDado(dado) { // Função para verificar o tipo do dado recebido como parâmetro
    if (typeof dado === 'string') { // Verifica se o tipo do dado é uma string
        console.log("é uma string"); // Exibe no console que o dado é uma string

    } else if (typeof dado === 'number') { // Verifica se o tipo do dado é um número
        console.log("é um numero"); // Exibe no console que o dado é um número

    } else if (typeof dado === 'boolean') { // Verifica se o tipo do dado é um booleano
        console.log("e um boolean"); // Exibe no console que o dado é um booleano
    }
}

console.log(verificarDado(true)); // Chama a função com o valor true (booleano) e exibe o resultado
console.log(verificarDado(2)); // Chama a função com o valor 2 (número) e exibe o resultado
console.log(verificarDado("felipe")); // Chama a função com o valor "felipe" (string) e exibe o resultado







