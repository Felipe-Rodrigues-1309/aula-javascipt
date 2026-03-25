let promessa = Promise.resolve (10);

console.log("outros codigos");

console.log(promessa);

promessa.then((value) => {return value + 50})

.then((value) => {console.log(value)});