/**
 * crear algoritmo que devuelva un array
 * de objetos en base a pares
 */

let pares =[
    [1, { name: 'Juan', age: 25 }],
    [2, { name: 'Pedro', age: 30 }],
    [3, { name: 'Luis', age: 35 }]
];


let array = [
    { id: 1, name: 'Juan', age: 25 },
    { id: 2, name: 'Pedro', age: 30 },
    { id: 3, name: 'Luis', age: 35 },
]

function toCollection(arr){
    let Collection = [];
    for (idx in arr) {
        let element = arr[idx];
        Collection[idx] = element[1];
        Collection[idx].id = element[0];
    }
    return Collection;
}

let resultado = toCollection(pares);
console.log(resultado);