let carroDePlaca = "13v09f15";
const modelo = "gol g5"
let velocidadeMaximaPermitida = 80;
let velocidadeAtual = 80;
const mensagem1 = "passou com a velocidade acima da permitida pela via";
const mensagem2 = "vc esta dentro do limite permitido pela via";

if( velocidadeAtual > velocidadeMaximaPermitida){
    console.log(`o carro de placa ${carroDePlaca} e modelo ${modelo} ${mensagem1} que é de ${velocidadeMaximaPermitida} km por hora`);
}else{
    console.log(mensagem2);
}