// function User(a){
//     let name = a;
//     this.getName = function(){return name;}
// };


class User{
    #name;

    constructor(name){
        this.#name = name;
    }

getName(){
    return this.#name
}
}

const u = new User('chanchito feliz')