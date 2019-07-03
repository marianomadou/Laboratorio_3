var vec=[4,3,6,7,8];
var doubles=[];

var personas=[
    {nombre:"Juan",
    edad:20},
    {nombre:"Lucia",
    edad:23},
    {nombre:"Pedro",
    edad:30}
];

var nombres=personas.map(traerNombre);
console.log(personas.map(p=>p.nombre));//esto hace lo mismo que que la funcion traerNombre
//map devuelve un array con la misma cantidad de elementos que el array original


function traerNombre(persona){

    return persona.nombre;
}

console.log(nombres);

//console.log(vec.map(function(valor, indice){
    //console.log("Valor: " + valor + " - indice: " + indice);
    //return valor *2;
//}));

