let el = document.createElement('p');

el.innerText = 'elemento creado';
document.body.append(el);

// el.innerText = '<ul><li>hola mundo</li></ul>';
// el.innerHTML = '<ul><li>hola mundo</li></ul>';

el.style = 'background-color : green';
el.className = 'parrafo';
el.id = 'mi-parrafo';
el.setAttribute('mipropiedad', 'mi propiedad');
el.getAttribute('mipropiedad');
el.hasAttribute('mipropiedad');
