// Resolução da aula
// Declaração da função chamada 'aleatorio' que recebe um parâmetro 'num'
function aleatorio(num) {
    // A função retorna um número aleatório inteiro entre 1 e 'num' (inclusive).
    // Math.random() gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo).
    // Multiplicamos esse número por 'num' para expandir o intervalo para [0, num).
    // Math.floor() arredonda o número para baixo, resultando em um número inteiro entre 0 e (num - 1).
    // Adicionamos 1 para ajustar o intervalo para [1, num].
    return Math.floor(Math.random() * num) + 1;
}

// Chama a função 'aleatorio' passando o valor 100 como argumento.
// Isso gera um número aleatório inteiro entre 1 e 100 (inclusive) e o imprime no console.
console.log(aleatorio(100));


// minha preimeira resolução
function GerarAleatorio(x){
    return Math.floor(Math.random() * x) + 1;
}

let resultado = parseFloat(prompt("DIGITE QUALQUER NUMERO"));
console.log(GerarAleatorio(resultado))




