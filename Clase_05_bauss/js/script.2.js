
var boton;
var contador=0;

addEventListener('load', function(){

    boton=document.getElementById('btnRun');
    boton.addEventListener('click', ejecutar, false);
    boton2=document.getElementById('btnRun2');
    boton2.addEventListener('click', ejecutar2, false);

}, false);

function ejecutar(){
    
    var parrafo= document.getElementById('p1');
    
    var nodoTexto=document.createTextNode(" Hola mundo " + contador);
    contador++;

    parrafo.appendChild(nodoTexto);

    parrafo
    //console.log(parrafo.childNodes.length);

}

function ejecutar2(){
    
    var parrafo= document.getElementById('p1');
    if(parrafo.hasChildNodes())
    {
        parrafo.removeChild(parrafo.firstChild);
    }else{
        console.log("no hay mas hijos para borrar");
    }
    


}

