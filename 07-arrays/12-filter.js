const usuarios =[
    {edad: 17, nombre:'nico'},
    {edad: 13, nombre:'chanchito'},
    {edad: 25, nombre:'felipe'},
    {edad: 32, nombre:'fernanda'},
];

const mayores = usuarios.filter(usuario => usuario.edad > 17);
const menores = usuarios.filter(usuario => usuario.edad <= 17);
console.log(mayores, menores);

