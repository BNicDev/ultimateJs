let objeto = {
    id: 1,
    name: 'chanchito',
    login : function(){},
    logout: function(){},
}

function cualesMetodos(obj){
    for(key in obj){
        if(obj[key]===obj.login){
            console.log(key);
        }else if(obj[key]===obj.logout){
            console.log(key);
        }
    }
}

cualesMetodos(objeto);