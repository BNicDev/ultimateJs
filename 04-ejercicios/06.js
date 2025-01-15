/**
 * crear un algoritmo que devuelva una cantidad de
 * numeros positivos de un array
 */

let array = [2,5,7,15,-5,-100,55];

function cuantosPositivos(arr){
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>0){
            contador++;
        }
    }
    return contador;

}

let resultado = cuantosPositivos(array);
console.log(resultado)

