let ProcurarNumero = /[0-9]/;

let numero = prompt("digite um numero");

let DigiteUmNumero = ProcurarNumero.test(numero);


if(DigiteUmNumero === true){
    alert(numero + " Atende aos paramentos");
}else{
    alert(numero + " Não atende aos parametros");
};