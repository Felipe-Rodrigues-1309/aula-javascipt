// Define uma função arrow chamada 'teste'.
// As funções arrow são uma forma mais concisa de escrever funções em JavaScript.
// Elas não possuem seu próprio contexto de 'this', o que pode ser útil em algumas situações.
let teste = () => {
    // Este comando imprime "hello world" no console do navegador ou do ambiente de execução.
    console.log("helo world");
};

// Chama a função 'teste', executando o código dentro dela.
// Isso fará com que "helo world" seja exibido no console.
teste();

// Define outra função arrow chamada 'teste2'.
// Esta função recebe dois parâmetros, 'x' e 'y', e retorna o produto (multiplicação) deles.
let teste2 = (x, y) => {
    // Retorna o resultado da multiplicação de 'x' por 'y'.
    return x * y;
};

// Chama a função 'teste2' com os argumentos 3 e 9.
// O resultado da multiplicação (3 * 9 = 27) será exibido no console.
console.log(teste2(3, 9));
