function imprimiPar() {
    let x = parseFloat(prompt("Digite um numero para decrementar")); // Solicita um número ao usuário e converte para float
    for (let y = x; y >= 0; y--) { // Loop que começa no número fornecido e decrementa até 0
        if (y % 2 == 0) { // Verifica se o número atual é par (resto da divisão por 2 é 0)
            console.log(`O número ${y} é par`); // Exibe um alerta informando que o número é par
        }
    }
}
imprimiPar(); // Chama a função para executar o código



// segunda forma de resolver
function imprimirImpar(numero){ // funcao com parametro
    for(let a = numero; a >= 0; a--){ // a recebe o valor digitado pelo usuario, enquanto a for maior ou igual a zero a funcao sera executada, sempre o loop for executado sera diminuido um numero 
        if( a % 2 == 1){ // se o resto de a for igual a 1 o numero sera impresso no console
            console.log(`o número ${a} é impar`);
        }
    }
}
let c = parseFloat(prompt("Digite um numero")); // recebe o numero que sera o parametro da funcao 
 imprimirImpar(c); // chama a funcao com o parametro que foi definido pelo usuario
 