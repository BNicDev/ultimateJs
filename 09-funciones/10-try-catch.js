function sumaTodo(arr){
    if(!Array.isArray(arr)){
        throw new Error('el parametro no es un array')
    }
    return arr.reduce((acc,el) => {
        if(typeof el !== 'number' || Number.isNaN(el)){
            throw new Error('el array solo puede contener numeros')
        }
        return acc + el
    });
}

// console.log(sumaTodo([1,2,3,4]))

try{
    console.log(sumaTodo([1,2,3,4 ]));
} catch(e){
    console.log(e.message)
}