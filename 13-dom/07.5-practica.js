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