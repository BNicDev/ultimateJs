//sin usar...ni object.asign
let obj1 = {id:1, name:'chanchito'};

function crearCopia(obj){
    let copia = {};
    for(prop in obj){
        copia[prop]=obj[prop];
    }
    return copia;

}

let obj2 = crearCopia(obj1);
console.log(obj1, obj2);