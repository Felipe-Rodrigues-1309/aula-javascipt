const validarMaiusculo = /[A-Z]/;

let digitarLetra = prompt("digite uma leta maiuscula");

let validador = validarMaiusculo.test(digitarLetra);

if(validador == true){
    alert ("a letra é maiuscula")
} else{
    alert ("a letra não é maiuscula")
};
