const letras = ['a', 'b', 1,  'c', 'd', 1];

console.log(letras.indexOf('c'));
console.log(letras.indexOf(1));
console.log(letras.lastIndexOf(1));
console.log(letras.lastIndexOf(1,3)); // se le indica cual es el valor a buscar y desde donde buscar en el array

console.log(letras.indexOf(1) !== -1);//no usar NUNCA

console.log(letras.includes('d'))