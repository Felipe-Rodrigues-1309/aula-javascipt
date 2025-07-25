function recusao(n) { // Define uma função chamada 'recusao' que recebe um número 'n'.
    if (n - 1 < 2) { // Verifica se 'n - 1' é menor que 2, condição para parar a recursão.
        console.log("recusao parou" + n); // Exibe a mensagem "recusao parou" quando a condição é atendida.
    } else if (n % 2 != 0) { // Verifica se 'n' é ímpar (resto da divisão por 2 é diferente de 0).
        console.log("numero impar" + n); // Exibe "numero impar" se 'n' for ímpar.
        recusao(n - 1); // Chama a função 'recusao' novamente, reduzindo 'n' em 1.
    } else { // Caso contrário, se 'n' for par.
        console.log("numero par" + n); // Exibe "numero par" se 'n' for par.
        recusao(n - 2); // Chama a função 'recusao' novamente, reduzindo 'n' em 2.
    }
}

recusao(65); // Inicia a recursão com o valor 65.
recusao(99); // Inicia a recursão com o valor 99.
recusao(45); // Inicia a recursão com o valor 45.