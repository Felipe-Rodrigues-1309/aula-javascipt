function checarNumero(num) {
  let number = Number(num);
  if (Number.isNaN(number)) {
    console.log("insira um numero valido");
  } else {
    return alert(number);
  }
}

checarNumero(prompt());

