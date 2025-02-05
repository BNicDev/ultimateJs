const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    {id:15},
    ['lala']
];
function dividePorTipo(arr){
//    return arr.reduce((acc, el) => {
//         const tipo = typeof el;
//         acc[tipo] = acc[tipo] || [];
//         acc[tipo].push(el);
//         return acc;
//     }, {});
    return { 
        numeros: arr.filter(el => typeof el === 'number'),
        strings: arr.filter(el => typeof el === 'string'),
        objetos: arr.filter(el => typeof el === 'object'),
    }
};

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);


// const numeros = [3, 10, 20, 50 ];

// let total = numeros.reduce((acc,num) => {
//     return acc + num * 2;
// }, 0);

// let acumularDoble = numeros.reduce((acc, num) => {
//     return [...acc, num * 2];
// },[])

// console.log(acumularDoble, numeros);

