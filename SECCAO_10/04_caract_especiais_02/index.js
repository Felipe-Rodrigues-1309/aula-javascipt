let DataDeNascimento = /\d\d\d\d\d\d\d\d/;

let aniversario = prompt("data de nascimento ?");
let resultado = DataDeNascimento.test(aniversario);

if(resultado === true){
    alert("atende aos parametros");
}else{
    alert("não atende aos parametros");
};