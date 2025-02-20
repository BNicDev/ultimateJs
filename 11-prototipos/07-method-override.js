function Entidad(){}
Entidad.prototype.save = function(){
    console.log('guardando desde entidad...', this.name)
}

function User(){};

User.prototype.save = function(){
    console.log('guardando desde user...')
}

Object.setPrototypeOf(User.prototype, Entidad.prototype);

const u = new User();
console.log(Object.getPrototypeOf(Object.getPrototypeOf(u)).save())