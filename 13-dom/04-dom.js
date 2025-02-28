let el = document.createElement('p');
el.innerText = 'elemento creado';

//el metodo de append puede recibir txt y nodos
document.body.append(el);

el.remove();

//este inyecta el elemento al principio del documento tambien recibe txt y nodos
document.body.prepend(el)

let div = document.createElement('div');
div.innerText = 'soy un texto';

el.replaceWith(div);

document.body.replaceChild(el, div);
document.body.removeChild(el);
//este metodo nos va a dejar agregar un child a al final del doc pero solo recibe nodo
document.body.appendChild(el);

//este metodo inyecta elemento antes del otro que le pasemos como parametro
// document.body.insertBefore(div, el);

document.body.insertAdjacentElement('beforebegin', div);
document.body.insertAdjacentElement('afterbegin', div);
document.body.insertAdjacentElement('beforeend', div);
document.body.insertAdjacentElement('afterend', div);

document.body.insertAdjacentHTML;
document.body.insertAdjacentText;