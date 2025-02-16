function ordenar(texto, fn){
    let completo = texto.trim().split(' ').join('');
    //trim() elimina los espacios en blanco al principio y al final de la cadena
    //split(' ') divide la cadena en un array de strings separados por espacios
    //join('') convierte el array de strings en una cadena de texto
    let ordenado = completo.split('').sort().join('');
    //split('') divide la cadena en un array de caracteres
    //sort() ordena el array de caracteres
    //join('') convierte el array de caracteres en una cadena de texto
    fn(ordenado)
};

ordenar('hola mundo', console.log)

//eliminar el espacio entre hola y mundo