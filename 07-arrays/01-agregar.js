const letras = ['a', 'b'];

letras.push('c', 'd'); //agrega contenido al final del array

letras.unshift('y', 'z')// agrega contenido al principio del array

letras.splice(3,0, 1,2) //agrega elementos en el indice donde se le indica

console.log(letras); // imprime el array