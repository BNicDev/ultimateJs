// function User(name){
//     this.name = name;
//     this.instancia = function(){}
// }

// User.prototype.login = function(){
//     console.log('hola mundo!')
// }

class User{
    constructor(name){
        this.name = name;   
        this.instancia = function(){}
    }

    activo = true;

    logout(){
        console.log('logout')
    }

    login(){
        console.log('hola mundo!')
    }
}

const u = new User('juan');
console.log(u)