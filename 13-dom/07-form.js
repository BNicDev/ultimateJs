let validate = data =>{
    let errors = {};
    if(!data.name) {
        errors.name = "Name is required";
    }
    if(!data.lastname) {
        errors.lastname = "Lastname is required";
    }

    return errors;

}

let initialValues = {
    name: '',
    lastname: ''
}

let render = ({data, errors }) => {
    return `
        <form name = 'formulario'>
            <div>
                <label>Nombre: </label>
                <input name = 'name' values ="${data.name}"/>\
                ${errors.name || ''}
            </div>
            <div>
                <label>Apellido: </label>
                <input name = 'lastname' values = "${data.lastname}"/>
                ${errors.lastname || ''}
            </div>
            <div>
                <button>Enviar</button>
            </div>
        </form>    
    `
}

let form = document.createElement('form');
form.innerHTML = render({data: initialValues, errors: {}});
document.body.append(form);


form.addEventListener('submit', e => {
    e.preventDefault();
    let data = Array.from(e.target.elements).reduce((acc, el) => {
        if(!el.name) return acc;
        acc[el.name] = el.value;
        return acc;
    },{})
    const errors = validate(data);
    console.log(errors);

    if(Object.keys(errors).length > 0){
        let html = render({
            errors, data
        })
        form.innerHTML = html
        return;
    }

    // utilizar promesas o asincronia para enviar datos del servidor


})