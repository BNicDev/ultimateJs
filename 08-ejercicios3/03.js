const usuarios = [
    {edad: 17, nombre:'Nico', plan:'premium'},
    {edad: 13, nombre:'Chanchito', plan:'free'},
    {edad: 32, nombre:'Felipe', plan:'free'},
    {edad: 25, nombre:'Fernanda', plan:'gold'},
];

function getPaiduser(usrs){
    return usrs.filter(user => user.plan !== 'free');
};

function getFreeUser(usrs){
    return usrs.filter(user=>user.plan === 'free')
};

console.log(getPaiduser(usuarios), getFreeUser(usuarios));

// const productos = [
//     {id: '0000', nombre: 'camiseta', precio: 500, categoria: 'ropa', stock: 100},
//     {id: '0001', nombre: 'zapatilla', precio: 300, categoria: 'calzado', stock: 200},
//     {id: '0002', nombre: 'notebook', precio: 1500, categoria: 'tecnologia', stock: 50},
//     {id: '0000', nombre: 'monitor', precio: 500, categoria: 'tecnologia', stock: 30},
// ];

// function getStock(productos){
//     return{
//         RESTOCKEAR :productos.filter(prd => prd.stock <=50)
//     }
// }; 

// function getCategoria(productos, key){

//         let productosFiltrados = productos.filter(prd => prd.categoria === key);
//         return productosFiltrados;
    
// };

// let clave = 'tecnologia';

// console.log(getStock(productos), getCategoria(productos, clave ));