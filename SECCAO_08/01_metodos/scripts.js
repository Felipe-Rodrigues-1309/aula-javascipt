// Criação de um objeto chamado 'cachorro' exibindo no input 
let cachorro = {
  // Definição de um método chamado 'latir'
  latir: function() {
    // Cria uma variável local chamada 'auau' e atribui a ela a string "au au au"
    let auau = "au au au";
    // Seleciona o elemento HTML com a classe 'butao' e altera seu valor para o conteúdo da variável 'auau'
    // Isso normalmente afeta o texto exibido em um input do tipo button ou text
    document.querySelector(".butao").value = auau;
  }
}


// outra forma de funcao com metodo exibindo no console
let carro = {
    buzinar: function(){
        console.log("bi bi ");
    }
}

carro.buzinar();


// usando mais de um metodo na mesma função
let moto = {
    acelerar: function(){
        console.log("rapido");
    },
        rapido: function(){
            alert("perigoso");
        }
    }

    moto.acelerar();
    moto.rapido()
