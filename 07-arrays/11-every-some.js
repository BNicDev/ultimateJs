let usuarios = [
    {id: 1, activo: true},
    {id: 2, activo: true},
    {id: 3, activo: true},
];

// let todosActivos = usuarios.every(u =>{
//     console.log('todos activos', u.id);
//     return u.activo;
// })

// console.log(todosActivos);

let algunoActivo = usuarios.some(u =>{
    console.log('algunos activos', u.id);
    return u.activo;
})

console.log(algunoActivo);