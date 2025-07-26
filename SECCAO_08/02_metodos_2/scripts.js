const cachoro = {
    // Propriedade 'raca' inicializada com o valor "sem raça"
    raca: "sem raça",

    // Método 'uivar' que imprime "auuuuuuuuuuu" no console
    uivar: function(){
        console.log("auuuuuuuuuuu");
    },

    // Método 'rosnar' que imprime "grrrrr" no console
    rosnar: function(){
        console.log("grrrrr");
    },

    // Método 'setRaca' que recebe um parâmetro e altera a propriedade 'raca' do objeto
    setRaca: function(raca){
        this.raca = raca;
    },

    // Método 'getRaca' que deveria retornar a propriedade 'raca'
    // Porém, há um erro de sintaxe: return "" . this.raca;
    // O correto seria: return this.raca;
    getRaca: function(){
        return this.raca;
    }
}

// Exibe o valor inicial da propriedade 'raca' no console ("sem raça")
console.log(cachoro.raca);

// Chama o método 'setRaca' para alterar a propriedade 'raca' para "teste"
cachoro.setRaca("teste");

// Exibe o novo valor da propriedade 'raca' no console ("teste")
console.log(cachoro.raca);