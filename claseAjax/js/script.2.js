
//pasaje de datos por POST

window.addEventListener('load', asignarManejadores, false);

function asignarManejadores(){

    document.forms[0].addEventListener('submit', function(e){
        
        e.preventDefault();

        manejarSubmit()
    });

}

function manejarSubmit(){

    var nombre = document.getElementById('txtNombre').value;
    var apellido = document.getElementById('txtApellido').value;
    var datos = 'nombre=' + encodeURIComponent(nombre) + '&apellido=' + encodeURIComponent(apellido);
    var xhr = new XMLHttpRequest();
    var info = document.getElementById('info');
    info.innerHTML="";
    var spinner = document.createElement('img');
    spinner.setAttribute('src', 'images/spinner.gif');
    spinner.setAttribute('alt', 'spinner');

    

    console.log(spinner);

    xhr.onreadystatechange=function(){
        if (this.readyState==4){

            if(xhr.status==200){
                //console.log(JSON.parse(xhr.responseText));
                info.innerHTML=xhr.responseText;

            }else{
                console.log('Error ' + xhr.status + xhr.statusText);
            }
        }else{
            info.appendChild(spinner);
        }
    };
    xhr.open('POST', 'http://localhost:3000/enviarDatos', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(datos);
}


