function Usuario(nombre){
    this.nombre = nombre;
}
console.log(Usuario.name);
console.log(Usuario.length);

const u =  Usuario;
let user = new u('nicolas');
console.log(user)

function of(Fn,arg){ 
    return new Usuario(arg);
}


let user1 = of(Usuario, 'chanchito');
console.log(user1);

function returned(){
    return function(){
        console.log('hola mundo');
    }
}

let saludo = returned();
saludo()