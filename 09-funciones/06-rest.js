const suma = (a,b, ...rest) => {
    console.log(rest);
}


// suma(1,2,3,4);

const logMsg = (desc, ...msgs)=>{
    for(let msg of msgs){
        console.log(desc, msg);
    }
}

// logMsg('Servidor:', 'Error 1', 'Peticion aceptada', 'Socket activo');
let mensajes = ['Error 1','Peticion aceptada', 'Socket activo'];
logMsg('Cliente movil:', ...mensajes, 'Otro error');
//si se utiliza un spred operator se puede seguir pasando argumentos