//pasaje de datos por GET

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
    var datos = 'nombre=' + nombre + '&apellido=' + apellido;
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
    xhr.open('GET', 'http://localhost:3000/enviarDatos?'+ datos, true);
    xhr.send();
}



/*
function ejecutar(){

    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if (this.readyState==4){

            if(xhr.status==200){
                //console.log(JSON.parse(xhr.responseText));
                document.getElementById('info').innerHTML=xhr.responseText;
            }
        }
    };
    
    xhr.open('GET', 'http://localhost:3000/lista.txt', true);
    xhr.send();

}
*/
