// minha resolucao 
let nome = prompt("digite um nome"); // Solicita ao usuário que digite um nome e armazena na variável 'nome'
alert( "o nome "  + nome + " tem " + nome.length + " letras "); // Exibe um alerta com o nome digitado e a quantidade de letras (usando .length)

// resolucao da aula
let numeros = [1,43,4,5,6,75,43]; // Declara um array chamado 'numeros' com 7 elementos

console.log(numeros.length); // Exibe no console o comprimento do array (quantidade de elementos: 7)
console.log(numeros['length']); // Exibe no console o comprimento do array acessando a propriedade 'length' como string (também retorna 7)
console.log(numeros[3]); // Exibe no console o quarto elemento do array (índice 3, valor: 5)

// minha resolucao 
let teste = prompt("digite arrays separandos por virgula").split(','); // Solicita ao usuário que digite valores separados por vírgulas e os converte em um array usando .split(',')
let escolha = prompt("escolha um"); // Solicita ao usuário que escolha um índice do array
alert(teste[escolha]); // Exibe em um alerta o elemento do array correspondente ao índice escolhido pelo usuário