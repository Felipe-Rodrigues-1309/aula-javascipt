function DigiteUmaPalavra() { // Define uma função chamada DigiteUmaPalavra
    let palavra = prompt("digite uma palavra"); // Solicita ao usuário que digite uma palavra e armazena na variável 'palavra'
    if (palavra.length >= 10) { // Verifica se a palavra tem 10 ou mais caracteres
        alert("texto muito longo"); // Exibe um alerta informando que o texto é muito longo
    } else { // Caso contrário, se a palavra tiver menos de 10 caracteres
        alert("texto dentro dos parametros"); // Exibe um alerta informando que o texto está dentro dos parâmetros
    }
}

DigiteUmaPalavra(); // Chama a função para executar o código
