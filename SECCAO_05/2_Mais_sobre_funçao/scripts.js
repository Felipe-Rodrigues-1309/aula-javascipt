
// minho resolucao
let idade = parseFloat(prompt("idade ? ")) //usado o passerfloat quando for com numeros
let cnh = prompt("Você possui CNH? (sim/não)").toLowerCase(); // Normaliza para letras minúsculas
function Dirigir (){
    if(idade >=18 && cnh == "sim"){
        alert("pode dirigir");
    }else{
        alert("não pode dirigr");
    }
}
Dirigir();



//Resolucao da aula
function PodeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("pode dirigir");
    }else{
        console.log("não pode dirigir");
    }
}
console.log(PodeDirigir(18,true));
console.log(PodeDirigir(17,true));
console.log(PodeDirigir(21,1));
console.log(PodeDirigir(29,0));