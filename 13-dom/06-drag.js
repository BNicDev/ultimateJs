let id;

function createDraggable(){
    let span = document.createElement('span');
    span.id = 'Hola-Mundo';
    span.innerText = 'arrastable';
    span.draggable = true; 
    span.ondragstart = e => {
        id = e.target.id;
    }

    return span
};

function createDropArea(){
    let dropArea = document.createElement('div');
    dropArea.className = 'drop';

    dropArea.ondragenter = e => {
        e.target.style.background = 'yellow';
    }

    dropArea.ondragleave = e => {
        e.target.style.background = '';
    }

    dropArea.ondragover = e => e.preventDefault();

    dropArea.ondrop = e =>{
        e.target.appendChild(document.getElementById(id))
    }

    return dropArea;
}

let draggable = createDraggable()
let dropArea = createDropArea()
let dropArea2 = createDropArea()
document.body.append(dropArea);
document.body.append(dropArea2);
document.body.append(draggable)