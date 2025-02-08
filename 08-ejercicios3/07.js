// const usuarios = [
//     {edad: 17, nombre:'Nico', plan:'premium'},
//     {edad: 13, nombre:'Chanchito', plan:'premium'},
//     {edad: 32, nombre:'Felipe', plan:'free'},
//     {edad: 25, nombre:'Fernanda', plan:'gold'},
// ];

// //esta funcion existe en Object.groupBy
// function groupBy(arr,prop){
//     return arr.reduce((acc,usr) => {
//         let valor = usr[prop];  
//         acc[valor] =acc[valor] ? acc[valor] : [];
//         acc[valor].push(usr);
//         return acc;
//     }, {})

// };

// const grouped = groupBy(usuarios, 'plan');

// console.log({grouped})

const productos = [
    {id: '0000', nombre: 'camiseta', precio: 500, categoria: 'ropa', stock: 100},
    {id: '0001', nombre: 'zapatilla', precio: 300, categoria: 'calzado', stock: 200},
    {id: '0002', nombre: 'notebook', precio: 1500, categoria: 'tecnologia', stock: 50},
    {id: '0000', nombre: 'monitor', precio: 500, categoria: 'tecnologia', stock: 30},
];

// function groupBy(arr, prop) {
//     return arr.reduce((acc, el) => {
//         let key = el[prop];
//         acc[key] = acc[key] ? acc[key] : [];
//         acc[key].push(el)
//         return acc;
//     }, {})
// };


// const grouped = groupBy(productos, 'categoria');


// console.log({grouped})


function acumular(arr){
    let acumulado = arr.reduce((acc,el) => {
        return acc + el.precio;
    }, 0);
    return acumulado;
};

function filtered(arr){
    let filtrados = arr.filter(el => el.precio < 1000);
    return acumular(filtrados);
}


console.log( 'total: ', filtered(productos));