const validar = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|20\d{2})$/; 

let validarEmail = prompt("digite um email valido");

let validacao = (validar.test(validarEmail))

if(validacao == true){
    alert("email correto")
}else{
    alert("email incorreto")
};

