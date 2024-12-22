let imagen = document.querySelector('img');

imagen.onclick = function() {
    let miSrc = imagen.getAttribute('src');
    if(miSrc === 'images/Mozilla-Firefox-3.5-logo.png') {
      imagen.setAttribute('src', 'images/Mozilla-Firefox-1-logo.png');
    } else {
      imagen.setAttribute('src', 'images/Mozilla-Firefox-3.5-logo.png');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');

    if(!miNombre){
        estableceNombreUsuario();
    }else{
        localStorage.setItem('nombre', miNombre);
        miTitulo.textContent = 'Mozilla es genial, ' + miNombre;
    }
    
}

if(!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}