function teste(){
    let digite = parseFloat(document.querySelector(".valor").value.replace(',', '.')); // recebe o valor do input com de class "nome" o replace(',' , '.') faz com que o funcao reconheça o virgula como ponto
    let moeda = digite.toLocaleString('pt-br',{style: 'currency', currency: 'BRL' }); // pega o valor digitado no input de class "valor" e transforma em moeda BRL
    document.querySelector(".resultado").value = moeda; // coloca no input de class"resultado" o resultado de let moeda
    }