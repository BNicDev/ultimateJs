function similares(obj1, obj2){
    // if(JSON.stringify(obj1)===JSON.stringify(obj2)){
    //     return true;
    // }else{
    //     return false;
    // }

    let distintos = false;
    for (let key in obj1) {
       if( obj1[key] !== obj2[key]){
            distintos = true;
       }
    }
    return !distintos;
}

let resultados = similares(
    {id:1, name: 'nico'},
    {id:1, name: 'lalo'},
);

console.log(resultados);