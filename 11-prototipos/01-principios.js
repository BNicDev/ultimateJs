// encapsulacion
// const user = {
//     nombre: ' holas',
//     apellido: 'mundo',
//     getNombreCompleto(){
//         return [this.nombre, this.apellido].join(' ');
//     }
// }

// console.log(user.getNombreCompleto());

//abstraccion

// const user = new User();
// user.password = 'chanchito feliz';
// user.save();

//herencia 
//en js usamos una funcionalidad padre para crear una nueva clase hija

//polimorfismo

function validaEntidad(entidad){
    //...

    // switch(entidad.nombre){
    //     case 'user':
    //         entidad.save();
    //         break;
    //     case 'restaurante':
    //         entidad.guardar();
    //         break;
    //     case 'moto':
    //         //...
    // }

    entidad.save()
}