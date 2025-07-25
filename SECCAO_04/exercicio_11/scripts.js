let nome = "Felipe";
let idade = 19;
const cnh = false;
const idadeMinima = 18;
const possuiCnh = true;
const mesagem1 = "parabens";

if(idade >= idadeMinima && cnh === possuiCnh){
    console.log(`${mesagem1} ${nome} vc tem permissao para dirigir`);
}else if ( idade >= idadeMinima || cnh === possuiCnh) {
    console.log(`${nome} vc é maior de idade porem nao tem cnh`);
} else {
    console.log(`${nome} infelizmente vc não pode dirigir`);
}