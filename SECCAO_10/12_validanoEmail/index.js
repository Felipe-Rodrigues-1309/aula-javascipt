const validar = /\w+@\w+.\.\w+/;

let validarEmail = prompt("digite um email valido");

let validacao = (validar.test(validarEmail))

if(validacao == true){
    alert("email correto")
}else{
    alert("email incorreto")
};

