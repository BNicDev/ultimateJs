const usuario = {
    nombre: 'nicolas',
    ciudadanias : ['chile', 'colombia', 'argentina'],
    mostrarCiudadanias(){
        this.ciudadanias.forEach(ciudadania => {
            console.log(this.nombre, ciudadania)
        })
    }
}

usuario.mostrarCiudadanias();