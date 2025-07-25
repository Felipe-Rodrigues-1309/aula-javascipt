let felipe = { // Declara um objeto chamado 'felipe' com uma propriedade 'idade'
    idade: 10, // A propriedade 'idade' é inicializada com o valor 10
}

viviane = felipe; // A variável 'viviane' recebe a referência ao mesmo objeto que 'felipe'

console.log(viviane); // Exibe o objeto 'viviane' no console, que é o mesmo que 'felipe'

console.log(felipe == viviane); // Compara se 'felipe' e 'viviane' são o mesmo objeto (retorna true, pois ambos apontam para a mesma referência na memória)

felipe.idade = 20; // Altera a propriedade 'idade' do objeto 'felipe' para 20

console.log(felipe); // Exibe o objeto 'felipe' no console, agora com 'idade' igual a 20

console.log(viviane); // Exibe o objeto 'viviane' no console, que também reflete a mudança, pois 'viviane' e 'felipe' compartilham a mesma referência