function Entidad(entidad){
    this.id =Math.random().toString('20');
    this.Entidad = entidad;
};


function User(){
    Entidad.call(this, 'user');
    this.attrs = {
        name: 'nicolas',
        age: 25,
        email: 'nicolas@gmail.com'
    }
}

const u = new User();
console.log(u)