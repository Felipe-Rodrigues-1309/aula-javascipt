function saudacao(nome){
  if(typeof nome != 'string'){
    throw new Error("o parametro precisa ser string");
  }else{
    alert (`ola ${nome}`)
  }
}


saudacao(prompt());
saudacao(5);
