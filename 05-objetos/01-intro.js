let email = "nico@holamundo.io"
let name = "Nico";
let direccion =  {
    calle:'queen st',
    numero: 15
}

let user = { 
    email:"nico@holamundo.io",
    name: "Nico",
    direccion:{
        calle:'queen st',
        numero: 15,
    },
    activo: true,
    recuperarClave: function(){
        console.log("recuperando clave...");
    }//a esto se lo conoce como una funcion anonima
}

console.log(user);

// a esto se lo conoce como programacion orientada a objetos