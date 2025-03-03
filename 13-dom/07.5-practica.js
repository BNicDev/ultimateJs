let validar = data => {
    let errors = {};
    if (!data.nombre || !data.apellido){
        alert('es un campo requerido')
        console.log(errors);
    }
}

let render = () =>{
    return `
        <form>
            <div>
                <label>Nombre: </label>
                <input type="text" id="nombre" name="nombre">
            </div>
            <div>
                <label>Apellido: </label>
                <input type="text" id="apellido" name="apellido">
            </div>
            <div>
                <label>Telefono: </label>
                <input type="number" id="telefono" name="telefono">
            </div>
            <div>
                <button>Enviar</button>
            </div>
        </form>    
    `
};

let form = document.createElement('form');
form.innerHTML = render();
document.body.append(form);

form.addEventListener('submit', e => {
    e.preventDefault();
    let datos = Array.from(e.target.elements).reduce((acc,el)=>{
        if(!el.name) return acc; //si no se valida el primer elemento devolveme el arr vacio
        acc[el.name] = el.value;
        return acc;
    },{})
    if(!datos.nombre || !datos.apellido || !datos.telefono){
        validar(datos);
    }else{
        console.log(datos);
    }
   
})