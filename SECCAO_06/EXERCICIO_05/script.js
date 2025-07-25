// minha resolução sem parametro na função
function autoEscola() { // Função para verificar a idade e exibir o resultado
    let idade = parseFloat(document.querySelector(".idade").value); // Captura o valor do input .idade e converte para número

    if (isNaN(idade)) { // Verifica se o valor inserido não é um número
        alert("Digite um valor valido!!!") // Exibe um alerta informando que o valor é inválido

    } else if (idade >= 18) { // Verifica se a idade é maior ou igual a 18
        document.querySelector(".resultado").value = "vc é maior de idade"; // Exibe a mensagem no input .resultado

    } else { // Caso a idade seja menor que 18
        document.querySelector(".resultado").value = "vc é menor de idade"; // Exibe a mensagem no input .resultado
    }
}


// minha resolução com parametro na funcao 
function entrar(idade){
    if(idade >= 18){
        console.log("maior de idade");
    }else{
        console.log("menor de idade")
    }
}

console.log(entrar(18));
console.log(entrar(1));
console.log(entrar(12));
console.log(entrar(1));
