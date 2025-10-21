let array = prompt([]); // usado para pegar array pelo prompt
let array2 = [];

function verificarArray(arr) {  // arr e usado para identificar que se trata de um array 
  if (arr.length == 0) {
    throw new Error("precisa ter pelo menos um elemento");
  } else {
    for (let i = 0; i < arr.length; i++)
    {
      console.log(i);
    }
  }
}

verificarArray(array);
verificarArray(array2);