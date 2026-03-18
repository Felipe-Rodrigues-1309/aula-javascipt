alert ("ainda não chamou o callback 1 ");

setTimeout(function(){
 let seuNome = prompt("digite seu nome");

 alert ("ola " + seuNome);

}, 6000);

alert ("ainda nao chamou o callback 2 ");