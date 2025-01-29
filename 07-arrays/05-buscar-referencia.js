const usuarios = [
    { id: 1, nombre: 'Chanchito' },
    { id: 2, nombre: 'Feliz' },
];

// const resultado = usuarios.indexOf({ id: 1, nombre: 'Chanchito' });


//predicate es una funcion que retorna un valor booleano
const resultado = usuarios.find(usuario => usuario.id === 1);

console.log(resultado); // -1   