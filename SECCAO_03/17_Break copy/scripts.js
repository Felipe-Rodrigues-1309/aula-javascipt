for(let f = 20; f > 0; f = f -1){ // f = 20 enquanto f for maior que 0 sera diminuido 1 numero do f que tem o valor toral de 20
    if (f % 2 == 0){ // enquanto o resto for zero que significa par o if ira continuar, caso nao seja sera exibido o valor de f
        console.log("Caiu no loop");
        continue;
    }
    console.log(f);
}