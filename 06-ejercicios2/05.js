let objeto = {
    id: 1,
    name: 'nicolas',
    login : function(){},
    logout: function(){},
}
let propiedad = 'name';

function tieneProp(obj, propiedad){
    for(key in obj){
        if(obj.hasOwnProperty(propiedad)){
            return true
        }else{
            return false
        }
    }
};


console.log(tieneProp(objeto,propiedad))