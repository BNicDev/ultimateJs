const user = {id:1};

user.name = "Nico";
user.guardar = function(){
    console.log("guardando...", user.name);
}

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

const user1 =Object.freeze({id:1});//no deja modificar el objeto
const user2 =Object.seal({id:1})//no deja agregar ni eliminar propiedades pero si modificarlas
user1.name = "Nico";
user2.id = 2;
console.log(user1);
console.log(user2);
