let el1 = document.createElement('div');
el1.innerText = 'Nicolas Pizarro';
el1.style = 'background-color: black; color:red;';
el1.className = 'NombreCompleto';

document.body.append(el1);

//estos metodos solo recibe texto, adjacentText no reconoce etiquetas html
// se comportan similares pero con esa unica diferencia
// document.body.insertAdjacentHTML("beforebegin", "<div> estoy aqui</div>")
// document.body.insertAdjacentText('afterend', "estoy aqui" )


