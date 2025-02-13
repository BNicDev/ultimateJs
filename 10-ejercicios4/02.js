const obj = {
    nombre: 'nicolas',
}

function extender(usuario){
    // usuario.login = () =>{
    //     console.log('iniciando sesion', usuario.nombre)
    // }
    const metodos = {
        login(){
            console.log('iniciando sesion', usuario.nombre)
        },
        logout(){
            console.log('cerrando sesion', usuario.nombre)
        },
    };
    return Object.assign(usuario, metodos)
};

const usuario = extender(obj);

console.log(usuario);

usuario.login()