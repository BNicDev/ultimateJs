function User(){
    this.name = 'hola mundo';
}

// User.prototype.save = function(){
//     console.log('guardando...')
// }

function Product(){
    this.name = 'Producto';
}

// Product.prototype.validate = function(){
//     console.log('validando')
// }


function Entidad(){}
Entidad.prototype.save = function(){
    console.log('guardando...', this.name)
}
Entidad.prototype.validate = function(){
    console.log('validando...',  this.name)
}

// User.prototype = Entidad.prototype;
// User.prototype.constructor = User;

// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = User;

Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);
const user = new User();
console.log(user)