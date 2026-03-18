const cep = /\d{5}-\d{3}/;

let cepDigitado = prompt("verifique se seu cep e valido");

if (cepDigitado && cep.test(cepDigitado)) {
    alert("Cep correto");
} else {
    alert("cep incorreto");
}