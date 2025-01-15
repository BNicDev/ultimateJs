/**
 * crear algoritmo que tome un array de 
 * objetos y devuelva un array de pares
 */

let array = [
    { id: 1, name: 'Juan', age: 25 },
    { id: 2, name: 'Pedro', age: 30 },
    { id: 3, name: 'Luis', age: 35 },
]

let pares =[
    [1, { id: 1, name: 'Juan', age: 25 }],
    [2, { id: 2, name: 'Pedro', age: 30 }],
    [3, { id: 3, name: 'Luis', age: 35 }]
];

function toPairs(arr){
    let pares = [];
    for (let i = 0; i < arr.length; i++) {
        pares.push([i+1, arr[i]]);
    }
    return pares;
}

let resultado = toPairs(array);
console.log(resultado); // [[1, { id: 1, name: 'Juan', age: 25 }], [2, { id: 2, name: 'Pedro', age: 30 }], [3, { id: 3, name: 'Luis', age: 35 }]]