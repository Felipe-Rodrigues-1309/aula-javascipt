
/*// MINHA RESOLUÇÃO
for( let X = 1; X <= 2; X++ ){

    if( X % 2 == 1 && X % X == 0){ // X % 2 == 1 significa que quando o X não for divisivel por um numero par ele irar retornar false - X % X significa que quando X for divisivel por X ele retornara true 
        console.log(`${X} É PRIMO`);
    }else{
        console.log(`${X} NÃO É PRIMO`);
    }
}*/


//RESOLUÇÃO DA AULA
let num = 2;
let divisao = 0;

for(let i = 1; i <= num; i++){
    if(num % i ==0){
        divisao++;
    }
}
if(divisao == 2 ) {
    console.log(`o numero e ${num} primo`)
}else{
    console.log(`o numero ${num} não é primo`);
}