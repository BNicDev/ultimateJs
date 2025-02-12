const obj = {
    nombre : 'nicolas',
};

function Extender(){
    this.login = () => {
        console.log('iniciando sesion', this.nombre);
    }


    this.logout = () => {
        console.log('cerrando sesion', this.nombre);
    }
};

Extender.call(obj);

console.log(obj)
obj.login()
obj.logout()