
var boton;
var contador=0;
var ids=1;

addEventListener('load', function(){

    boton=document.getElementById('btnRun');
    boton.addEventListener('click', ejecutar, false);
    boton2=document.getElementById('btnRun2');
    boton2.addEventListener('click', ejecutar2, false);

}, false);

function ejecutar(){
    
    var div= document.getElementById('miDiv');

    var enlace=document.createElement('a');
    var nodoTexto=document.createTextNode("ir a Google ");
    enlace.appendChild(nodoTexto);

    console.log(enlace.getAttribute('href'));

    enlace.setAttribute('href', 'https://www.google.com.ar');
    enlace.setAttribute('id', 'a'+ids);
    ids++;
    enlace.classList.add('red');
    //enlace.classList.add('red');
    enlace.setAttribute('target', '_blank');
    //

    console.log(enlace.getAttribute('href'));

    div.appendChild(enlace);

    /*var nodoTexto=document.createTextNode(" Hola mundo " + contador);
    contador++;

    parrafo.appendChild(nodoTexto);

    //console.log(parrafo.childNodes.length);*/

}

function ejecutar2(){

    var enlace= document.getElementById('a1');

    var enlaces= document.getElementsByTagName('a');
    for(var i=0; i < enlaces.length; i++ ){
        enlaces[i].classList.toggle('blue')
    }

    //enlace.classList.toggle('blue');
    /*if(enlace.hasAttribute('href')){
       
        enlace.removeAttribute('href');
    }*/

    /*
    var enlace= document.getElementById('miDiv');
        if(enlace.hasChildNodes())
        {
            enlace.removeChild(enlace.firstChild);
        }else{
            console.log("no hay mas hijos para borrar");
        }
    */
}

