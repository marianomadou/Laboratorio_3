

window.addEventListener('load', inicializarEventos);

function inicializarEventos() {
    var imagen = document.getElementsByTagName('img')[0];
    imagen.addEventListener('mouseover', function (e) {
        e.target.setAttribute('src', './images/superM_icono.png');
    })
}


function cambiarColor() {
    var h1 = document.getElementById('mih1');
    h1.style.color = 'red';
}
