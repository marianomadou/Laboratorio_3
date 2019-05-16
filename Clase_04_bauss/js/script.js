var parrafo;
var div;

addEventListener('load', asignarManejadores, false);

    function asignarManejadores(){
        parrafo=document.getElementById('p1');
        
        parrafo=addEventListener('click', manejador);
        parrafo=addEventListener('mouseover', manejador);
        parrafo=addEventListener('mouseout', manejador);
    }
    
function manejador(e){
    
    e.target.innerHTML='Otro texto';
    console.log(e.type);
}



/*

var parrafo;
var div;

addEventListener('load', asignarManejadores);

    function asignarManejadores(){
        parrafo=document.getElementById('p1');
        parrafo=addEventListener('click', cambiarTexto);

        div=document.getElementById('div1');
        div=addEventListener('click', cambiarColor);
        document.getElementsByTagName('body')[0].addEventListener('click', cambiarColorFondo);
    }

function cambiarTexto(e){
    
    e.target.innerHTML='Otro texto';
    alert("estoy en p");
}

function cambiarColor(e){
    e.target.style.color="red";
    alert("estoy en div");
}

function cambiarColorFondo(e){
    e.target.style.backgroundColor="green";
    alert("estoy en body");
}*/

/*
window.addEventListener("load", cambiarTexto);

function cambiarTexto() {
    document.getElementById('p1').addEventListener('click', function(){
        this.innerHTML = "Otro texto";
    });
}
*/






/*
//document.getElementsByTagName('p')[0].onclick=;//agregar a la funcion

window.onload=function (){

    var parrafo=document.getElementsByTagName('p')[0];
    parrafo.onclick = function (e){
        e.target.innerHTML='Otro texto';
    }
}
*/




/*
var persona1={};
var persona2= new Object();
var persona3={nombre:"Jose", apellido:"San Martin"};
persona1.nombre="Juan";
persona2.nombre="Mariano";

persona1.Saludar=function(){ return "hola " + this.nombre;};

alert(persona1.Saludar());
console.log(persona3.nombre);

function Persona(nombre, apellido, edad)
{
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
}
var p1=new Persona("Mariano", "Madou", 39);
var p2=new Persona("Mercedes", "Bigi", 40);
var p3=new Persona("Silvia", "Fernandez Moreno", 51);


console.log(p1.nombre, p1.apellido, p1.edad);
console.log(p2.nombre, p2.apellido, p2.edad);
console.log(p3["nombre"], p3["apellido"], p3["edad"]);

for(propiedades in p2){//recorre el nombre de los atributos del objeto
    //console.log(p2[propiedades])
    console.log(propiedades + ": " + p2[propiedades]);
}
p1.localidad="Avellaneda";
Persona.prototype.localidad="Bernal";

console.log(p1.localidad);
console.log(p2.localidad);
console.log(Object.keys(p2).length);//devuelve la cantidad de propiedades del objeto
*/

/*function x(a){
    console.log(arguments.length);
    console.log(arguments);
}
x("juan", 24, "guglielmone");*/

/*var y;
var z=null;

console.log(z==y);// con == devuelve true pero con === no porque no son del mismo tipo
*/


/*function x(a,b){
    if(typeof b!== 'number'){
        b=1;
    }
    return a*b;
}
alert(x(4,5));//4 y 5 serian los argumentos*/

//todos los parametros que le llegan a javascript los guarda en un array que se llama arguments

/*var unaFuncion= new Function("a", "b", "return a + b");

alert(unaFuncion(7,8));*/


/*
var x=function(unParametro){

    alert("hola " + unParametro);
};
x('Sonia');

(function(nombre) {alert("hola " + nombre);})('Gustavo');//funcion auto-invocada*/



  /*function Saludar(){
    //alert("Hola mundo");
    //document.write("<h1> Hola World </h1>");
    //document.getElementById('p1').innerHTML="<h2>Hello world</h2>";
    //console.log("hola consola");
    //var cadena="esto es una cadena";//esto es un string
    //cadena=true;
    var cad= new String();
    var cadena="hola";
    var x=23;
    var pi=3.14;
    var d=true;
    var array=[];//array literal =new Array();
    var objeto={}; //objeto literal;

    var persona= {nombre:"Juan", edad:"34"};
    var fecha= new Date();
    var f = function sumar(){
        return 20;
    };

    var nu=null;


    console.log(typeof cadena);//string
    console.log(typeof x);//number
    console.log(typeof pi);//number
    console.log(typeof d);//boolean
    console.log(typeof cad);//object
    console.log(typeof array);//object
    console.log(typeof persona);//object
    console.log(typeof f);//function
    console.log(typeof variable);//undefined
    console.log(typeof nu);//object a null

  }*/
