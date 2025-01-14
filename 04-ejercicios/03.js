/*
indice validar que no sea menor a cero y que el elemento exista en el array 
*/

function getbyIdx(arr, idx){
    if(idx<0 || arr.length <=idx){
        return "no existe"
    }else{
        return arr[idx]
    }
}
let resultado = getbyIdx([1,2,3,4,5], 6)
console.log(resultado)
