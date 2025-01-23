function createUsuario(name){
    return{ 
        name,
        id: Math.random()
    }
}

let user = createUsuario('felipe');
let user2 = createUsuario('chanchito');
console.log(user, user2)