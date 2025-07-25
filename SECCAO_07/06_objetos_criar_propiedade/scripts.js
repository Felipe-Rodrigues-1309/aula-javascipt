let especificacao = { // Cria um objeto chamado "especificacao"
    nome: 'felipe', // Propriedade "nome" com valor 'felipe'
    idade: 26, // Propriedade "idade" com valor 26
    carro: true // Propriedade "carro" com valor true
};

console.log(especificacao.nome); // Exibe o valor da propriedade "nome" do objeto "especificacao"
especificacao.nome = 'viviane'; // Altera o valor da propriedade "nome" para 'viviane'
console.log(especificacao.nome); // Exibe o novo valor da propriedade "nome"
delete (especificacao.nome); // Remove a propriedade "nome" do objeto "especificacao"
console.log(especificacao.nome); // Tenta exibir o valor da propriedade "nome" (agora indefinido)

especificacao.altura = 2; // Adiciona uma nova propriedade "altura" com valor 2 ao objeto "especificacao"
console.log(especificacao.altura); // Exibe o valor da propriedade "altura"


