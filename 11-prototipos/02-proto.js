function User(){
    this.name = 'hola mundo';
    //metodo de instancia
    this.logger = function(){
        console.log('loggeando...');
        this.login()
    }
}
//metodo de prototipo
User.prototype.login = function(){
    console.log('iniciando sesion', this.name);
}
const user1 = new User();
const user2 = new User();

console.log(user1)
