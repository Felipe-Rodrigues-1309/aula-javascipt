function potencia(base, exp = 3) { // Função que calcula a potência, com 'exp' padrão igual a 3.
     return Math.pow(base, exp); // Retorna o resultado de 'base' elevado a 'exp'.
}

console.log(potencia(3)); // Chama a função com base 3 e usa o valor padrão de exp (3), resultado: 27.
console.log(potencia(3, 3)); // Chama a função com base 3 e exp 3, resultado: 27.
console.log(potencia(4, 4)); // Chama a função com base 4 e exp 4, resultado: 256.





// teste
function teste(a, b=5){
return (a*b);
}

console.log(teste(5));
console.log(teste(5,1));