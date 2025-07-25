//exemplo da aula
let marca = 'nike';
console.log(marca.toLocaleUpperCase()); // deixa em maiusculo
console.log(marca.toLocaleLowerCase()); // deixe em minusculo


// meu teste
let nome = prompt("Digite um nome para ficar em maiusculo");
alert(nome.toLocaleUpperCase());



// minha funcao usando inputs deu certo
function teste(){
let digite = document.querySelector(".nome").value; // recebe o valor do input com de class "nome"
let nomemaiusculo = digite.toLocaleUpperCase(); // pega o valor digitado no input de class "nome" e transforma em maiusculo
document.querySelector(".resultado").value = nomemaiusculo; // coloca no input de class"resultado" o resultado de let nomemaiusculo
}


// explicacao de metodos e propiedade
//string.propriedade    para evocar uma propriedade
//string.metodo()       para evocar um metodo