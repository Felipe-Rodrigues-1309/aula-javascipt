let NomeNaoAceito = /[^ab]/;

Nome = prompt("Digite seu nome");

resultado = NomeNaoAceito.test(Nome);

if(resultado === true){
    alert("nome Aceito ");
}else{
    alert("Nome não aceito");
}