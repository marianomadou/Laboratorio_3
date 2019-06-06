
//pasaje de datos por POST

window.addEventListener('load', asignarManejadores, false);

function asignarManejadores(){

    document.getElementById('btnGetPersonas').addEventListener('click', traerPersonas, false);

    
 //alta       
    document.forms[0].addEventListener('submit', (e)=>{
        e.preventDefault();
        var persona={};

        persona.nombre=document.getElementById('txtNombreAlta').value;
        persona.apellido=document.getElementById('txtApellidoAlta').value;
        persona.edad=document.getElementById('txtEdadAlta').value;
        
        modificarPersona(persona);

    }, false );

//baja
    document.forms[0].addEventListener('submit', (e)=>{
        
    e.preventDefault();
    var persona={};

    persona.nombre=document.getElementById('txtNombreBaja').value;
    persona.apellido=document.getElementById('txtApellidoBaja').value;
    persona.edad=document.getElementById('txtEdadBaja').value;
    
    eliminarPersona(persona);

}, false );


//modificar
    document.forms[0].addEventListener('submit', (e)=>{
        
        e.preventDefault();
        var persona={};

        persona.nombre=document.getElementById('txtNombreModificar').value;
        persona.apellido=document.getElementById('txtApellidoModificar').value;
        persona.edad=document.getElementById('txtEdadModificar').value;
        
        agregarPersona(persona);

    }, false );

    
    

}

function newPersona(formulario){

    console.log(formulario.controls);

    var persona={};
    persona.nombre= formulario.getElementById('txtNombreAlta').value;
    persona.apellido= formulario.getElementById('txtApellidoAlta').value;
    persona.apellido= formulario.getElementById('txtEdadAlta').value;
    return persona;

}

function traerPersonas(){

    var xhr = new XMLHttpRequest();
    var spinner = document.createElement('img');
    var personas=[];
    var info = document.getElementById('info');
    var lista='';
    info.innerHTML="";

    spinner.setAttribute('src', 'images/spinner.svg');
    spinner.setAttribute('alt', 'spinner');
    spinner.setAttribute('style', 'height:50px');

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
    xhr.open('GET', 'http://localhost:3000/traerPersonasArray', true);
    xhr.send();
}

function agregarPersona(persona){

    var xhr = new XMLHttpRequest();
    var spinner = document.createElement('img');
    spinner.setAttribute('src', 'images/spinner.svg');
    spinner.setAttribute('alt', 'spinner');
    spinner.setAttribute('style', 'height:50px');

    var rtaPersona;

    xhr.onreadystatechange=function(){
        if (this.readyState==4){

            if(xhr.status==200){
                
                rtaPersona=JSON.parse(xhr.responseText);
                document.getElementById('id').value=rtaPersona.id;
                document.getElementById('nombre').value=rtaPersona.nombre;
                document.getElementById('apellido').value=rtaPersona.apellido;
                document.getElementById('edad').value=rtaPersona.edad;
                document.getElementById('spin').removeChild(document.getElementById('spin').firstChild);

            }else{
                console.log('Error ' + xhr.status + xhr.statusText);
            }
        }else{
            document.getElementById('spin').appendChild(spinner);
        }
    };
    xhr.open('POST', 'http://localhost:3000/altaPersona', true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(persona));
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

