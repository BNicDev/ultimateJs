const usuario = {
    nombre: 'chanchito',
    apellido: 'feliz',
    get nombreCompleto(){
        return `${usuario.nombre} ${usuario.apellido}`;
    }, set nombreCompleto(valor){
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
};
usuario.nombreCompleto = 'hola mundo'
console.log(usuario.nombreCompleto);