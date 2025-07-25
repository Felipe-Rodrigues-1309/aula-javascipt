function Potencia(x, y) { // Define uma função chamada Potencia que recebe dois parâmetros: x (base) e y (expoente)
    return Math.pow(x, y); // Retorna o resultado de x elevado à potência de y usando Math.pow
}

let a = parseFloat(prompt("primeiro numero")); // Solicita ao usuário o primeiro número (base) e converte para número decimal
let b = parseFloat(prompt("segundo numero")); // Solicita ao usuário o segundo número (expoente) e converte para número decimal
alert(Potencia(a, b)); // Exibe um alerta com o resultado da função Potencia(a, b)