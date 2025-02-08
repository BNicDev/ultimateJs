const usuarios = [
    {edad: 17, nombre:'Nico', plan:'premium'},
    {edad: 13, nombre:'Chanchito', plan:'free'},
    {edad: 32, nombre:'Felipe', plan:'free'},
    {edad: 35, nombre:'Fernanda', plan:'gold'},
];

//obtener los usuarios pagos

function obtenerUsuariosPagos(usrs){
    let pagos = usrs.filter(el => el.plan !== 'free');
    let ordenados = ordenarEdad(pagos);
    return obtenerNombre(ordenados);
}

//ordenar de mayor a menor edad
function ordenarEdad(usrs){
    let ordenados = usrs.sort((a,b) => b.edad - a.edad);
    return ordenados;
}
//devolver el nombre del usuario
//crear una plantilla html 

// imprimirla en consola 

/*
<ul>
<li>felipe</li>
<li>fernanda</li>
</ul>

*/
function obtenerNombre(usrs){
    let nombres = usrs.map(el => `<li>${el.nombre}</li>`);
    let resultado = `<ul>${nombres.join('')}</ul>`
    return resultado;
}

console.log(obtenerUsuariosPagos(usuarios))