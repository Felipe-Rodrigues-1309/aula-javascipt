function lembrarSoma(x) { // Define uma função chamada 'lembrarSoma' que recebe um parâmetro 'x'.
     return function(y) { // Retorna uma nova função que recebe um parâmetro 'y'.
          return x * y; // A nova função multiplica 'x' (do escopo externo) por 'y' (do escopo local).
     }
}

let soma1 = lembrarSoma(5); // Chama 'lembrarSoma' com o valor 5 e armazena a função retornada em 'soma1'.
alert(soma1(6)); // Chama a função armazenada em 'soma1' com o valor 6, resultado: 5 * 6 = 30.

let soma2 = lembrarSoma(4);
alert(soma2(2));