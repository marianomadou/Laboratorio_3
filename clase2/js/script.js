//declara varibale sin inicializar
//asignar manejadores
//agregar manejadores al final

//var formulario;

window.addEventListener('load', iniciarEventos2)
//delegado al puntero de la funcion
//los objetos lanzan excepciones y eventos
function iniciarEventos() {
    //set up y configuracion
    //formulario = document.getElementById('txtNombre');
    //formulario = document.getElementsByTagName('form')[0]; 
    //formulario.addEventListener('submit');

    document.forms[0].addEventListener('submit', function (e) {

        alert("lolo");
        e.preventDefault(); // lo q hacia por default  toma el control del evento 'submit'
    });//obtienen la referencia el html

    //devuelve un array con toda la data del form,
    // le agrego lo corchete con el indice

}

///////////////////////////////////////////////////////////////////
function iniciarEventos2() {
    document.forms[0].addEventListener('submit', manejarSubtmit);
}

function manejarSubtmit(e) {
    e.preventDefault();
    var informacion = "";
    informacion += "Nombre: " + document.getElementById('txtNombre').value + "<br>";
    informacion += "Clave: " + document.getElementById('txtClave').value;

    if (document.getElementById('chkJS').checked) {
        informacion += "<br> Sabe JavaScript";
    }
    else {
        informacion += "<br> NO Sabe JavaScript";
    }

    if (document.getElementById('chkHTML').checked) {
        informacion += "<br> Sabe html";
    }
    else {
        informacion += "<br> NO Sabe html";
    }


    if (document.getElementById('chkCss').checked) {
        informacion += "<br> Sabe css";
    }
    else {
        informacion += "<br> NO Sabe CSS";
    }

    ///////////////////

    if (document.getElementById('Masc').checked) {
        informacion += " <br>  Es Maculino";
    }
    else {
        informacion += "<br> Es Femenino";
    }

    document.getElementById('info').innerHTML = informacion; //propiedad
}




//////////////// OTRA MANERA DE HACER LO MISMO

window.addEventListener('load', function () {
    document.forms[0].addEventListener('submit', function (e) {
        e.preventDefault();
    });
});

window.addEventListener('load', () => //funcion simplificada de una function anonima NO RECOMENDADO DE USAR
{
    document.forms[0].addEventListener('submit', (e) => {
        e.preventDefault();
    });
});


