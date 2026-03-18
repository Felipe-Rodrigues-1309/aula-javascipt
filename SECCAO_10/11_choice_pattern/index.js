const reg = /\w+: (matheus|joão|maria)/; 

console.log(reg.test("nome: matheus"));
console.log(reg.test("nome:jose"));