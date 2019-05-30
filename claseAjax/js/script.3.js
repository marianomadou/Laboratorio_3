
//pasaje de datos por POST

window.addEventListener('load', asignarManejadores, false);

function asignarManejadores(){

    document.getElementById('btnGetPersona').addEventListener('click', traerPersona, false);

}

function traerPersona(){

    var TxtNombre = document.getElementById('txtNombre');
    var TxtApellido = document.getElementById('txtApellido');
    var TxtEdad = document.getElementById('txtEdad');
    var xhr = new XMLHttpRequest();
    var spinner = document.createElement('img');
    var persona;
    var info = document.getElementById('info');

    spinner.setAttribute('src', 'images/spinner.gif');
    spinner.setAttribute('alt', 'spinner');

    console.log(spinner);

    xhr.onreadystatechange=function(){
        if (this.readyState==4){

            if(xhr.status==200){
                persona=JSON.parse(xhr.responseText);
                TxtNombre.value=persona.nombre;
                TxtApellido.value=persona.apellido;
                TxtEdad.value=persona.edad;
                info.innerHTML="";

            }else{
                console.log('Error ' + xhr.status + xhr.statusText);
            }
        }else{
            info.appendChild(spinner);
        }
    };
    xhr.open('GET', 'http://localhost:3000/traerJSON', true);
    xhr.send();
}


