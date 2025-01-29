let arr1 = [1,2];
let arr2 = [3,4];

let concatenado = arr1.concat(arr2); // [1,2,3,4]
console.log(concatenado, arr1, arr2);

// let separados = concatenado.slice(1, 3); // [2,3]
// let separados = concatenado.slice(1); // [2,3,4]
let separados = concatenado.slice(); // [1,2,3,4] 
console.log(separados, concatenado);