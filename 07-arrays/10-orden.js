// let numeros = [10,15,-3];

// numeros.sort(); // [-3, 10, 15]
// numeros.reverse();// [15, 10, -3]
// console.log(numeros);

// let letras = ['z', 'a','d'];

// letras.sort(); // ['a', 'd', 'z']
// console.log(letras);

// let conMayusculas = ['Z', 'a','d'];

// conMayusculas.sort((a,b)=>{
//     let alower = a.toLowerCase();
//     let blower = b.toLowerCase();
//     if(alower < blower){
//         return -1;
//     }
//     if(alower > blower){
//         return 1;
//     }
//     return 0;

// }); // ['Z', 'a', 'd']
// console.log(conMayusculas);

let usuarios = [
    {edad:15, nombre: 'Felipe' },
    {edad:25, nombre: 'Nicolas' },
    {edad:13, nombre: 'Poli' },

];

usuarios.sort((a,b)=>{
    if(a.edad < b.edad){
        return -1;
    }
    if(a.edad > b.edad){
        return 1;
    }
    return 0;
});

console.log(usuarios);