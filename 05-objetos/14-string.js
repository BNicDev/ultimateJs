const saludar = 'Hola Mundo ';
const despedida = new String('chao mundo:(');
console.log( typeof saludar);
console.log( typeof despedida);

console.log(saludar.length);
console.log(saludar.indexOf('Mu'));
console.log(saludar.includes(' Mundo'));
let nuevoSaludo = saludar.replace('Mundo', 'nicolas');
console.log(nuevoSaludo, saludar);
console.log(saludar.toLowerCase());
console.log(saludar.toUpperCase());

console.log(saludar.substring(0,4));
console.log(saludar.substr(2,4)); // deprecado!

const espacios = '    hola mundo!'
console.log(espacios.trim())
console.log(espacios.trimStart())
console.log(espacios.trimEnd())



