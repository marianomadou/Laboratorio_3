
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
    var personas=[];
    var info = document.getElementById('info');
    var lista='';

    spinner.setAttribute('src', 'images/spinner.gif');
    spinner.setAttribute('alt', 'spinner');

    console.log(spinner);

    xhr.onreadystatechange=function(){
        if (this.readyState==4){

            if(xhr.status==200){
                personas=JSON.parse(xhr.responseText);
                info.innerHTML="";
                
                for (var i in personas) {
                    info.innerHTML+= '<p>' + personaToString(personas[i])+'</p><hr>';
                }

            }else{
                console.log('Error ' + xhr.status + xhr.statusText);
            }
        }else{
            info.appendChild(spinner);
        }
    };
    xhr.open('GET', 'http://localhost:3000/traerPersonas', true);
    xhr.send();
}

function personaToString(persona){
    var cadena='';
    for(var prop in persona){
        cadena+= '<b>' + prop + ': </b>' + persona[prop] + ' ';
    }
    return cadena;
}

