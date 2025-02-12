// (function saludar(...rest){
//     console.log(this, rest);
// }
// ).bind({propiedad: 'hola mundo'})(3,5)
// // saludar.call({propiedad: 'hola mundo'}, 1,5)
// // saludar.apply({propiedad: 'hola mundo'}, [1,5]);
// // saludar.bind({propiedad: 'hola mundo'})(3,5)


const usuario = {
    nombre: 'nicolas',
    ciudadanias : ['chile', 'colombia', 'argentina'],
    mostrarCiudadanias(){
        // let self = this;
        this.ciudadanias.forEach(function (ciudadania){
            console.log(this.nombre, ciudadania)
        },this)
    }
}

usuario.mostrarCiudadanias();