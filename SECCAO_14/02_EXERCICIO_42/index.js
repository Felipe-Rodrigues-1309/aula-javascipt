const validarMaiusculo = /\d+ID\b/

let digitarLetra = prompt("identificar id");

let validador = validarMaiusculo.test(digitarLetra);

if(validador == true){
    alert ("tem id")
} else{
    alert ("nao tem id")
};
