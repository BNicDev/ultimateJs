const usuarios = [
    {edad: 17, nombre:'Nico', plan:'premium'},
    {edad: 13, nombre:'Chanchito', plan:'free'},
    {edad: 32, nombre:'Fernanda', plan:'free'}
];

const users = [
    {age: 22, name: 'michael', membership: 'premium'},
    {age: 27, name: 'kevin', membership: 'free'},
    {age: 29, name: 'Happy pig', membership: 'free'},
]

//unificar las estructuras de usuarios y user 
function unificarEstructuras(usrs,usrs2) {
    const usuariosUnificados = usrs.map(usuario => {
        return{
            age: usuario.edad,
            name: usuario.nombre,
            membership: usuario.plan
        }
    })
    let unidos = unificados(usuariosUnificados, usrs2);
    let ordenados = ordenarEdad(unidos)
    return obtenerDatos(ordenados);
}

//fusionar los arrays
function unificados(usrs, usrs2) {
     return usrs.concat(usrs2); 
}
//ordenar por edad
function ordenarEdad(usrs){
    let ordenados = usrs.sort((a,b) => a.age - b.age);
    return ordenados;
}
//crear plantilla HTML:
function obtenerDatos(usrs){
    let datos = usrs.map(el => `<li>nombre: ${el.name}, age: ${el.age}</li>`)
    let joineados = `<ul>${datos.join('')}</ul>`
    return joineados
};
//<li>nombre: name, edad: age</li>
//imprimir la lista en consola

console.log(unificarEstructuras(usuarios, users));