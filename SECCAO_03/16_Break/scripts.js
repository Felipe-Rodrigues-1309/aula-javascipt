let nome = "Felipe";

for( let i = 0; i < 10; i = i + 1) {

    if( i == 3){
        nome = "viviane";
    }

    if( i == 5 && nome == "viviane"){
        console.log ("o nome é viviane pode parar");
        break;
    }

    console.log(i);
}