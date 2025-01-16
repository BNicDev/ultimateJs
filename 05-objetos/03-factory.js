// Objective: Crear un objeto con una función factory
function crearUsuario(name, email){
    return { 
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log("recuperando clave...");
        },
    };
}

let user1 = crearUsuario("Nico", "nico05pizarro10@gmail.com");
let user2 = crearUsuario("felipe", "felipe@gmail.com");

console.log(user1, user2);