/**
 * crear array de longitud N y que sus elementos sean 
 * numeros de 1 hasta N
 */

let longitud = 7 ;

function crearArray(n){
    let array = [];
    for(let i = 0; i<=n;i++){
        array[i]=i+1;
    }
    console.log(array);
    
}

let resultado = crearArray(longitud);
console.log(resultado); // [1,2,3,4,5,6,7]