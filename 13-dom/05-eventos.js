let form = document.createElement('form');
form.id = 'mi-formulario';
let input = document.createElement('input');
input.setAttribute('type', 'text');
let btn = document.createElement('button');
btn.innerText = 'enviar';
form.append(input);
form.append(btn);

document.body.append(form);

// form.onmouseenter = e => {
//     alert('entra el mouse', e);
// }

// form.onmouseleave = e =>{
//     alert('sale el mouse', e);
// }

input.onfocus = e => {
    console.log('input con focus');
}


input.onblur = e => {
    console.log('input perdio el foco');
}

input.onchange = e => {
    console.log('valor cambia', e.target.value)
}

// btn.onclick = e =>{
//     e.preventDefault();
//     console.log('boton click');
// }

btn.addEventListener('click', e => {
    e.preventDefault();
    console.log('boton click con addEventListener');
})