const letras = ['a', 'b', 'c', 'd' ];

//const final = letras.pop();//eliminar el ult elemento de un array, tamb permite agregar ese elemento a una var
// console.log(final, letras);

//const principio = letras.shift()// elimina el primer elemento, permite asignarle el valor a una var
// console.log(principio, letras);

letras.splice(1,2); //elimina elementos de entremedio
console.log(letras)