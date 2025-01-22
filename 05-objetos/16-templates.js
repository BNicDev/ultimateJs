const saludo = 'Hola \\Mundo\nbienvenidos a\t \"ultimate js\"';

const nombre = 'nicolas';
const apellido = 'pizarro'
function plantilla(nombre){
    return (`Hola ${nombre}
    bienvenidos a "ultimate javascript ;)

    nico!"
`
)}
console.log(plantilla(nombre));