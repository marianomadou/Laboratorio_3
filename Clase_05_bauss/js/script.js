
var boton;
addEventListener('load', function(){

    boton=document.getElementById('btnRun');
    boton.addEventListener('click', ejecutar, false);

}, false);

function ejecutar(){
    //alert('Hola mundo');
    var lista = document.getElementById('lista');

    //console.log(lista.childNodes.length);
    //console.log(lista.childNodes);
    console.log(lista.children);
   var hijos=lista.childNodes;
    for (var index = 0; index < hijos.length; index++) {
        
        if(hijos[index].nodeType == Node.ELEMENT_NODE)
        {
            console.log(hijos[index]);
        }
        
    }

}



