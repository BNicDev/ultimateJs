const usuarios =[
    {edad: 17, nombre:'nico'},
    {edad: 13, nombre:'chanchito'},
    {edad: 25, nombre:'felipe'},
    {edad: 32, nombre:'fernanda'},
];

const lista = usuarios
.filter(u => u.edad > 17)
.map(u => `<li>${u.nombre}</li>`);

const html = `<ul>${lista.join('')}</ul>`;


 console.log(html);

// const mapped = usuarios.map(u => {
//     return{
//         ...u,
//         mayor: u.edad > 17,
//     }
// });

// console.log(mapped);