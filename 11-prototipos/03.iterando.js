function User(){
    this.name = 'hola mundo';
}

User.prototype.login = function(){
    console.log('iniciando sesion', this.name);
}

let user = new User();

for(let prop in user)
    if(!user.hasOwnProperty(prop))
    console.log(prop);

console.log(Object.keys(user))