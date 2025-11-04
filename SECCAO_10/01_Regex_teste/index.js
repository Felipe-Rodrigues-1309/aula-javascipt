const reg1 = new RegExp('bola');

console.log(reg1.test("tem bola?"));
console.log(reg1.test("não tem bola"));







//Meu exemplo de Regex
const MeuTeste = new RegExp('felipe');

let teste = prompt("digite seu nome");
let nome = (reg1.test(teste));


if(nome === true){
    alert (teste + " Seu nome esta correto");
} else{
    alert ("Seu nome não condiz com os parametros");
};

