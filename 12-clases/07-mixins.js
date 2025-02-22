const Entidad ={
    save(){
        console.log("Se ha guardado la entidad");
    },
}

const Actualizar ={
    save(){
        console.log("Actualizado");
    },
}

class User{
    constructor(name){
        this.name = name;
    }
    save(){
        console.log('guardando en usuario')
    }
}

const nuevoProto = Object.assign(Entidad, Actualizar )
Object.setPrototypeOf(User.prototype, nuevoProto);
const u = new User("Juan");
u.save()