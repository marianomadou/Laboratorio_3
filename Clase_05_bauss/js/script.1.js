
var boton;
addEventListener('load', function(){

    boton=document.getElementById('btnRun');
    boton.addEventListener('click', ejecutar, false);

}, false);

function ejecutar(){

    var div= document.getElementById('miDiv');
    var primerHijo= div.firstElementChild;
    var ultimoHijo= div.lastElementChild;
    
    //console.log(primerHijo);
    //console.log(primerHijo.childNodes);
    //console.log(primerHijo.childNodes[0].nodeValue);
    //console.log(primerHijo.textContent)

    while(ultimoHijo){
        //console.log(ultimoHijo.textContent);
        ultimoHijo.textContent+= '.';
        ultimoHijo=ultimoHijo.previousElementSibling;
    }


    /*
    while(primerHijo)
    {
        console.log(primerHijo);
        primerHijo = primerHijo.nextElementSibling;
    }
    */

    //var primerHijo= div.children[0];
    
    
    
    
    
    
    /*
    //var parrafo= document.getElementsByTagName('p')[0];
    //console.log(parrafo[0]);
    //var div = parrafo.parentNode;
    //console.log(div);
    //var padre=parrafo.parentNode;
    //padre.style.background='blue';
    //console.log(padre);
    */

}



