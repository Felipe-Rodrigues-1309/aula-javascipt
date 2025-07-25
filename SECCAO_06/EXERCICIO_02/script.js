// minha resolução
function idade(){
let suaidade = parseFloat(prompt("Digite sua idade"));
let maiordeIdade = 18;

if( suaidade >= maiordeIdade){
    alert("vc é maior de idade!");
}else{
    alert("vc não é maior de idade !");
}
}



// resolução da aula

function imprmirIdade(idade){
    console.log(`vc tem ${idade} anos de idade`);
}

imprmirIdade(18);
imprmirIdade(15);
imprmirIdade(10);
imprmirIdade(5);